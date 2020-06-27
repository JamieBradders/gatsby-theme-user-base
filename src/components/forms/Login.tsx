/**
 * Signup Form
 */
import React, { useState, useEffect } from "react"
import { useFormik } from "formik"
import { useUserbase } from "../../userbase"
import { navigate } from "gatsby"

const LoginForm = () => {
  const { init, signIn } = useUserbase()

  const [error, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getUser() {
      const res = await init()

      if (res.session.user) {
        navigate("/account")
      }
    }

    getUser()
  }, [])

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      rememberMe: "none",
    },
    onSubmit: async values => {
      setLoading(true)

      const res = await signIn({
        username: values.username,
        password: values.password,
      })

      if (res.error) {
        setErrorMessage(res.error.message)
        setLoading(false)
      } else {
        navigate("/account")
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
      <button type="submit" disabled={loading}>
        {loading ? "Please wait..." : "Login"}
      </button>
    </form>
  )
}

export default LoginForm
