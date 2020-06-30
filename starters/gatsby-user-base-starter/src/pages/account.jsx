import React from "react";
import Layout from "../components/layout";
import { useUserbase } from "gatsby-theme-user-base";
import { useEffect } from "react";
import { navigate } from "gatsby";

const Account = () => {
  const [state] = useUserbase();

  useEffect(() => {
    if (!state.loading && !state.user.userId) {
      navigate("/");
    }
  }, [state]);

  return (
    <Layout>
      {state.loading && <p>Loading...</p>}
      {!state.loading && state.user?.username && (
        <h1>Hi, {state.user.username}</h1>
      )}
    </Layout>
  );
};

export default Account;
