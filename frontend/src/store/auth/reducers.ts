import { CredentialsData } from "../../types/user";
import { fetchTypes } from "../utils/types";

export const reducersAuth = {
  register: (
    state: CredentialsData = {token: undefined, user: undefined},
    action: { type: string; data: CredentialsData }
  ) => {
    const types = fetchTypes("login");
    if (action.type === types.FETCH_SUCCESS_NEW) return action.data;
    return state;
  },

  login: (
    state: CredentialsData = {token: undefined, user: undefined},
    action: { type: string; data: CredentialsData }
  ) => {
    if (action.type === fetchTypes("login").FETCH_SUCCESS_NEW) return action.data;
    return state;
  }
};