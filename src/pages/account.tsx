import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import { useUserbase } from "../userbase"
import { navigate } from "gatsby"
import { UserResult } from "userbase-js"

const Account = () => {
  const [user, setUser] = useState<UserResult>()
  const { init, signOut } = useUserbase()

  useEffect(() => {
    async function getUser() {
      const res = await init()

      if (res.error) {
        navigate("/")
      } else {
        if (res.session.user) {
          setUser(res.session.user)
        } else {
          navigate("/")
        }
      }
    }

    getUser()
  }, [])

  async function handleSignout() {
    await signOut()
    navigate("/")
  }

  console.log("this is user", user)

  return (
    <Layout>
      <h1>Account Page</h1>
      {user ? (
        <div>
          <p>Welcome {user.username}</p>

          <div style={{ paddingBottom: 24 }}>
            <button onClick={handleSignout}>Log Out</button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  )
}

export default Account
