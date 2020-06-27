/**
 * Userbase Hook
 */
import userbase, { RememberMeOption } from "userbase-js"

type SignUp = {
  username: string
  password: string
  rememberMe?: RememberMeOption
}

type SignIn = {
  username: string
  password: string
}

function useUserbase() {
  async function init() {
    const appId = "3940339a-c3e4-4850-befb-29825465a155"

    try {
      const session = await userbase.init({ appId })
      return {
        session,
      }
    } catch (error) {
      return {
        error,
      }
    }
  }

  async function signUp({ username, password, rememberMe }: SignUp) {
    try {
      const user = await userbase.signUp({
        username,
        password,
        rememberMe: "none",
      })
      return {
        user,
      }
    } catch (error) {
      return {
        error,
      }
    }
  }

  async function signIn({ username, password }: SignIn) {
    try {
      const user = await userbase.signIn({
        username,
        password,
      })
      return {
        user,
      }
    } catch (error) {
      return {
        error,
      }
    }
  }

  async function signOut() {
    try {
      const response = await userbase.signOut()
      return {
        response,
      }
    } catch (error) {
      return {
        error,
      }
    }
  }

  return {
    init,
    signUp,
    signIn,
    signOut,
  }
}

export default useUserbase
