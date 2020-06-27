/**
 * Signup Form
 */
import React, { useState } from "react";
import { useFormik } from "formik";
import { navigate } from "gatsby";
import { signIn, useUserbase } from "gatsby-theme-userbase-ed";

const LoginForm = () => {
  const [state, dispatch] = useUserbase();
  const [error, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      rememberMe: "none",
    },
    onSubmit: async (values) => {
      setLoading(true);

      const res = await signIn({
        username: values.username,
        password: values.password,
        rememberMe: "local",
      });

      if (res.error) {
        setErrorMessage(res.error.message);
        setLoading(false);
      } else {
        dispatch({ type: "setUser", payload: res.user });
        setErrorMessage(null);

        if (state.user) {
          navigate("/account");
        }
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {error && <p style={{ color: "#cb2aca", fontWeight: 600 }}>{error}</p>}
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

      <button type="submit" disabled={loading}>
        {loading ? "Please wait..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
