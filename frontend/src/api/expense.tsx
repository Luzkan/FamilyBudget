import api from './api';
import { fetchTypes } from './utils/Types';

const types = fetchTypes('expense');

export const creators = {
  postSendExpense: (number: number) => {
    return async (dispatch: (arg0: { type: string; data?: any; error?: any; }) => void) => {
      dispatch({ type: types.FETCH_REQUESTED });
      try {
        const res = await api.post('/api/rest/expense/', {'expense': number});
        dispatch({ type: types.FETCH_SUCCESS, data: res.data });
      } catch (error) {
        dispatch({ type: types.FETCH_ERROR, error });
      }
    };
  }
};

export const expenseReducer = (state = {}, action: { type: string; data: any; }) => {
  if (action.type === types.FETCH_SUCCESS) return action.data;
  return state;
};
