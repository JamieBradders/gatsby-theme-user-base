import React from "react";
import { Link } from "gatsby";
import { useUserbase } from "gatsby-theme-user-base";

import Layout from "../components/layout";

const Homepage = () => {
  const [state] = useUserbase();

  return (
    <Layout>
      <h1>Welcome to Your Application</h1>

      {!state.user?.userId && (
        <>
          <Link to="/login">Login</Link>
          <br />
          <Link to="/register">Register</Link>
        </>
      )}
    </Layout>
  );
};

export default Homepage;
