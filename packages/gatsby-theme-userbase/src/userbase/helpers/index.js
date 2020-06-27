import userbase from "userbase-js";

async function init(appId) {
  try {
    const session = await userbase.init({ appId });
    return {
      session,
    };
  } catch (error) {
    return {
      error,
    };
  }
}

async function signUp({ username, password, email, rememberMe }) {
  try {
    const user = await userbase.signUp({
      username,
      password,
      rememberMe,
      email,
    });
    return {
      user,
    };
  } catch (error) {
    return {
      error,
    };
  }
}

async function signIn({ username, password, rememberMe }) {
  try {
    const user = await userbase.signIn({
      username,
      password,
      rememberMe,
    });
    return {
      user,
    };
  } catch (error) {
    return {
      error,
    };
  }
}

async function signOut() {
  try {
    const response = await userbase.signOut();
    return {
      response,
    };
  } catch (error) {
    return {
      error,
    };
  }
}

export { init, signUp, signIn, signOut };
