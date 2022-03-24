import api from "../api";
import { fetchTypes } from "../utils/Types";

import AuthService from "../../services/auth.service";
import { LoginCredentials, RegisterCredentials } from "../../types/user";

type Dispatch = (arg0: { type: string; data?: any; error?: any }) => void;

export const creators = {
  login: (loginCredentials: LoginCredentials) => {
    return async (dispatch: Dispatch) => {
      const types = fetchTypes("login");
      dispatch({ type: types.FETCH_REQUESTED });
      
      await AuthService.login(loginCredentials)
        .then((response) => {
          console.log(response);
          dispatch({ type: types.FETCH_SUCCESS, data: response.data });
        })
        .catch((error) => {
          dispatch({ type: types.FETCH_ERROR, error });
        });
    }
  },
  register: (registerCredentials: RegisterCredentials) => {
    return async (dispatch: Dispatch) => {
      const types = fetchTypes("register");
      dispatch({ type: types.FETCH_REQUESTED });
      
      await AuthService.register(registerCredentials)
        .then((response) => {
          console.log(response);
          dispatch({ type: types.FETCH_SUCCESS, data: response.data });
        })
        .catch((error) => {
          dispatch({ type: types.FETCH_ERROR, error });
        });
    }
  },
};

export const loginReducer = (
  state = {},
  action: { type: string; data: any }
) => {
  if (action.type === fetchTypes("login").FETCH_SUCCESS) return action.data;
  return state;
};
