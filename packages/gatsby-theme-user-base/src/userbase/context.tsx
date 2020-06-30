import React, { useContext, useReducer, createContext, useEffect } from "react";
import { Session } from "userbase-js";

import { initialState, reducer } from "./reducer";
import { init } from "./helpers";

export const UserbaseContext = createContext({});

function UserbaseProvider({ children, appId }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setUser = (session: Session) => {
    dispatch({ type: "setUser", payload: { ...session.user } });
  };

  useEffect(() => {
    if (!state.user["userId"]) {
      async function initialize() {
        try {
          const res = await init(appId);

          console.log("Note: Response from the context", res);

          if (res.error) {
            throw new Error(`Unable to initialise userbase: ${res.error}`);
          } else {
            if (res.session.user) {
              setUser(res.session);
            } else {
              dispatch({ type: "setLoading", payload: false });
              console.log("Note: No user found");
            }
          }
        } catch (error) {
          throw new Error(`Initialize error: ${error}`);
        }
      }

      initialize();
    }
  }, [state.user["userId"], appId]);

  return (
    <UserbaseContext.Provider value={[state, dispatch]}>
      {children}
    </UserbaseContext.Provider>
  );
}

export function useUserbase() {
  return useContext(UserbaseContext);
}

export default UserbaseProvider;
