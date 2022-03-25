import AuthService from "../../services/auth.service";
import { fetchTypes } from "../utils/Types";
import { CredentialsData, LoginCredentials, RegisterCredentials } from "../../types/user";

type Dispatch = (arg0: { type: string; data?: any; error?: any }) => void;

export const creatorsAuth = {
  login: (loginCredentials: LoginCredentials) => {
    return async (dispatch: Dispatch) => {
      const types = fetchTypes("login");
      dispatch({ type: types.FETCH_REQUESTED });

      await AuthService.login(loginCredentials)
        .then((response) => {
          dispatch({ type: types.FETCH_SUCCESS, data: response.data });
        })
        .catch((error) => {
          dispatch({ type: types.FETCH_ERROR, error });
        });
    };
  },
  checkLoggedUserAuthorized: (credentialsData: CredentialsData) => {
    return async (dispatch: Dispatch) => {
      const types = fetchTypes("login");
      dispatch({ type: types.FETCH_REQUESTED })

      await AuthService.checkLoggedUserAuthorized(credentialsData)
        .then(() => {
          dispatch({ type: types.FETCH_SUCCESS, data: credentialsData });
        })
        .catch((error) => {
          dispatch({ type: types.FETCH_ERROR, error });
        });
    };
  },
  register: (registerCredentials: RegisterCredentials) => {
    return async (dispatch: Dispatch) => {
      const types = fetchTypes("register");
      dispatch({ type: types.FETCH_REQUESTED });

      await AuthService.register(registerCredentials)
        .then((response) => {
          dispatch({ type: types.FETCH_SUCCESS, data: response.data });
        })
        .catch((error) => {
          dispatch({ type: types.FETCH_ERROR, error });
        });
    };
  },
};