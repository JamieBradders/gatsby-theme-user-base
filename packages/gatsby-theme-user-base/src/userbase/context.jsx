import React, { useContext, useReducer, createContext, useEffect } from "react";

import { initialState, reducer } from "./reducer";
import { init } from "./helpers";

// Create user context
export const UserbaseContext = createContext({});

export const UserbaseProvider = ({ children, appId, rememberMe = "none" }) => {
  // Build up reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // Define some actions
  const setUser = (session) =>
    dispatch({ type: "setUser", payload: { ...session.user } });

  // With useEffect, if we have no user then we can create the session
  useEffect(() => {
    if (!state.user.userId) {
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

      // Call initialize()
      initialize();
    }
  }, [state.user.userId, appId]);

  return (
    <UserbaseContext.Provider value={[state, dispatch]}>
      {children}
    </UserbaseContext.Provider>
  );
};

export const useUserbase = () => {
  const session = useContext(UserbaseContext);

  return {
    ...session,
  };
};
