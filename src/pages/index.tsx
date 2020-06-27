import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useUserbase } from "../userbase"
import SignupForm from "../components/forms/Signup"
import { Link } from "gatsby"

const Homepage: React.FC = () => {
  const { init } = useUserbase()

  useEffect(() => {
    init()
  }, [])

  return (
    <Layout>
      <SEO title="Userbase Example" />
      <h1>Register</h1>

      <SignupForm />

      <p>
        Already got an account? <Link to="/login">Log in here</Link>
      </p>
    </Layout>
  )
}

export default Homepage
