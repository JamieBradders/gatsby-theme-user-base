import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SignupForm from "../components/forms/Signup";

const Register = () => {
  return (
    <Layout>
      <h1>Register</h1>

      <SignupForm />

      <p>
        Already got an account? <Link to="/login">Log in here</Link>
      </p>
    </Layout>
  );
};

export default Register;
