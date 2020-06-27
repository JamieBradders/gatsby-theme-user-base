import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LoginForm from "../components/forms/Login"
import { useUserbase } from "../userbase"
import { Link } from "gatsby"

const Login: React.FC = () => {
  const { init } = useUserbase()

  useEffect(() => {
    init()
  }, [])

  return (
    <Layout>
      <SEO title="Userbase Example" />
      <h1>Login</h1>

      <LoginForm />

      <p>
        Need an account? <Link to="/">Create one here</Link>
      </p>
    </Layout>
  )
}

export default Login
