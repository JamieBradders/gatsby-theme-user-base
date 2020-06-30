import React from "react";
import UserbaseProvider from "./src/userbase/context";

export const wrapRootElement = ({ element }, { APP_ID, REMEMBER_ME }) => {
  return (
    <UserbaseProvider appId={APP_ID} rememberMe={REMEMBER_ME}>
      {element}
    </UserbaseProvider>
  );
};
