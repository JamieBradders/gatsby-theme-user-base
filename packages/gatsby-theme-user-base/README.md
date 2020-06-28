# Gatsby Theme Userbase

Thanks for checking out my project. This theme is designed to assist with the integration of a new serverless user management system called [Userbase](https://userbase.com).

## Example

To see a working example of the theme in action then feel free to take a look at the rough and ready starter project that I have added to this repo in `starters/gatsby-user-base-starter`.

## Credits

There is [another Userbase theme](https://github.com/dayhaysoos/gatsby-theme-userbase) developed by [dayhaysoos](https://github.com/dayhaysoos). This theme takes a lot of inspiration from their project. I decided to run with my own version of a theme for the purpose of learning and I wanted to take this theme in a different direction as it will be used as part of a personal project.

## Why use this theme?

The theme is equipped with a Provider that will give you a central store for persisting a Userbase session across pages. The theme will also provide you with a handful of utility methods that makes handling Userbase requests a little bit easier for you.

For example, let's assume you want to create a submission callback function that will let a user log into their account.

```jsx
import { navigate } from "gatsby";
import { signIn, useUserbase } from "gatsby-theme-user-base";

const LoginForm = () => {
  const [state, dispatch] = useUserbase();

  const handleSubmit = async (values) => {
    const { username, password } = values;
    const body = { username, password };

    const res = await signIn(body);

    if (res.error) {
      console.log(`Oops! Something went wrong: ${res.error}`);
    } else {
      // Update our Userbase Context
      dispatch({ type: "setUser", payload: res.user });

      // You might want to navigate the user to the account page here
      navigate("/account");
    }
  };

  // The rest of your form...
};
```

## Available Helpers

This project is in it's very early stages, so functionality is limited. If I haven't provided a helper for a Userbase method that you need, then don't worry, you can still access the Userbase library directly.

```js
/**
 * Forgot Password is a method that we currently have
 * no helper for. Therefore, you won't be able to import
 * this from the `gatsby-theme-user-base` package.
 */

import { forgotPassword } from "userbase-js";

// Example with Promise
const handleForgottenPassword = ({ username }) => {
  forgotPassword({ username })
    .then((user) => {
      // email with temporary password sent
      console.log("this is user", user);
    })
    .catch((e) => console.error(e));
};

// Async/Await Example
const handleForgottenPassword = async ({ username }) => {
  try {
    const user = await forgotPassword({ username });
    // email with temporary password sent
    console.log("this is user", user);
  } catch (e) {
    console.error(e);
  }
};
```

### List of Helpers

The following helpers have been developed and tested:

- ✅ `init`
- ✅ `signUp`
- ✅ `signIn`
- ✅ `signOut`

The following helpers are to be included within the theme and are yet to be worked on:

- `forgotPassword`
- `updateUser`
- `deleteUser`

## What about Stripe Payments?

I haven't incorporated Userbase Payments into the theme at this stage. For the time being I start with the basics and then increment over time. However, as with the forgot password example shown above, you will still be able to leverage the Userbase SDK and integrate this into your Gatsby website accordingly.

Please refer to the [Userbase SDK documentation](https://userbase.com/docs/sdk/) for further information.
