/**
 * Interface and Types
 */

const initialState = {
  user: {},
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setUser":
      return {
        user: {
          ...state.user,
          ...action.payload,
        },
        loading: false,
      };

    case "clearUser":
      return {
        ...state,
        user: {},
      };

    case "setLoading":
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return initialState;
  }
};

export { initialState, reducer };
