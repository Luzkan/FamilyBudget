import { fetchTypes } from "../utils/Types";

export const reducersAuth = {
  register: (
    state = {},
    action: { type: string; data: any }
  ) => {
    const types = fetchTypes("register");
    if (action.type === types.FETCH_SUCCESS) return action.data;
    return state;
  },

  login: (
    state = {},
    action: { type: string; data: any }
  ) => {
    if (action.type === fetchTypes("login").FETCH_SUCCESS) return action.data;
    return state;
  }
};