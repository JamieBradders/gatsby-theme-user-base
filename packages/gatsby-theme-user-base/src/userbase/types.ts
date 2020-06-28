export type ActionType =
  | { type: "clearUser" }
  | { type: "setUser"; payload: {} }
  | { type: "setLoading"; payload: boolean };

export type StateType = {
  user: {};
  loading: boolean;
};
