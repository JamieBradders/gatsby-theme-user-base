/**
 * Signup Form
 */
import React, { useState } from "react";
import { navigate } from "gatsby";
import { useFormik } from "formik";
import { signUp, useUserbase } from "gatsby-theme-user-base";

const SignupForm = () => {
  const [, dispatch] = useUserbase();
  const [error, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      rememberMe: "none",
    },
    onSubmit: async (values) => {
      setLoading(true);

      const res = await signUp({
        email: values.email,
        username: values.username,
        password: values.password,
        rememberMe: "local",
      });

      if (res.error) {
        setErrorMessage(res.error.message);
        setLoading(false);
      } else {
        console.log("Note: User signed up", res.user.username);
        setErrorMessage(null);
        dispatch({ type: "setUser", payload: res.user });
        navigate("/account");
        setLoading(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {error && <p style={{ color: "#cb2aca", fontWeight: 600 }}>{error}</p>}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: 800,
          marginBottom: 16,
        }}
      >
        <div>
          <label htmlFor="username">
            Username:
            <input
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
          </label>
        </div>

        <div>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </label>
        </div>

        <div>
          <label htmlFor="password">
            Password:
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </label>
        </div>
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Please wait..." : "Register"}
      </button>
    </form>
  );
};

export default SignupForm;
