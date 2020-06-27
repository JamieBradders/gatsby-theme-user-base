/**
 * Signup Form
 */
import React, { useState } from "react"
import { useFormik } from "formik"
import { useUserbase } from "../../userbase"

const SignupForm = () => {
  const { signUp } = useUserbase()
  const [error, setErrorMessage] = useState(null)

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      rememberMe: "none",
    },
    onSubmit: async values => {
      const res = await signUp({
        username: values.username,
        password: values.password,
      })

      if (res.error) {
        setErrorMessage(res.error.message)
      } else {
        alert("User signed up successfully")
        formik.resetForm()
        setErrorMessage(null)
      }
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      {error && <p style={{ color: "#cb2aca", fontWeight: 600 }}>{error}</p>}
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        name="username"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.username}
      />

      <label htmlFor="password">Password:</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button type="submit">Signup</button>
    </form>
  )
}

export default SignupForm
