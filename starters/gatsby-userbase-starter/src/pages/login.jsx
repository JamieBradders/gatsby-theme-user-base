import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import LoginForm from "../components/forms/Login";

const Login = () => {
  return (
    <Layout>
      <h1>Login</h1>

      <LoginForm />

      <p>
        Need an account? <Link to="/register">Create one here</Link>
      </p>
    </Layout>
  );
};

export default Login;
