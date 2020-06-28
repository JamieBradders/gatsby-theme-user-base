import React from "react";
import { useUserbase } from "gatsby-theme-user-base";

import Header from "./header";

export default ({ children }) => {
  const [state] = useUserbase();

  console.log("this is the state", state);

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
