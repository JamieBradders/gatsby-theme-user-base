import userbase, { RememberMeOption } from "userbase-js";

async function init(appId: string) {
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

interface ISignUpBody {
  username: string;
  password: string;
  rememberMe: RememberMeOption;
  email?: string;
}

async function signUp({ username, password, email, rememberMe }: ISignUpBody) {
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

interface ISignInBody {
  username: string;
  password: string;
  rememberMe: RememberMeOption;
}

async function signIn({ username, password, rememberMe }: ISignInBody) {
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
