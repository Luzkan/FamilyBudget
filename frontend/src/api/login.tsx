import api from './api';
import { fetchTypes } from './utils/Types';

const types = fetchTypes('login');

export type LoginCredentials = {
  email: string;
  password: string;
};

export const login = {
  post: (loginCredentials: LoginCredentials) => {
    return async (dispatch: (arg0: { type: string; data?: any; error?: any; }) => void) => {
      dispatch({ type: types.FETCH_REQUESTED });
      try {
        const res = await api.post('/api/rest/login/', {
          'email': loginCredentials.email,
          'password': loginCredentials.password
        });
        dispatch({ type: types.FETCH_SUCCESS, data: res.data });
        return res
      } catch (error) {
        dispatch({ type: types.FETCH_ERROR, error });
      }
    };
  }
};

export const restLogin = (state = {}, action: { type: string; data: any; }) => {
  if (action.type === types.FETCH_SUCCESS) return action.data;
  return state;
};
