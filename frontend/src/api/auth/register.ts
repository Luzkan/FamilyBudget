import api from "../api";
import { fetchTypes } from "../utils/Types";

const types = fetchTypes("register");

export type RegisterCredentials = {
  email: string;
  password: string;
};

export const registration = {
  post: (registrationCredentials: RegisterCredentials) => {
    return async (
      dispatch: (arg0: { type: string; data?: any; error?: any }) => void
    ) => {
      dispatch({ type: types.FETCH_REQUESTED });
      try {
        const res = await api
          .post("/api/rest/register/", {
            email: registrationCredentials.email,
            password: registrationCredentials.password,
          })
          .then((response) => {
            if (response.data.token) {
              localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
          });

        dispatch({ type: types.FETCH_SUCCESS, data: res.data });
      } catch (error) {
        dispatch({ type: types.FETCH_ERROR, error });
      }
    };
  },
};

export const registerReducer = (
  state = {},
  action: { type: string; data: any }
) => {
  if (action.type === types.FETCH_SUCCESS) return action.data;
  return state;
};
