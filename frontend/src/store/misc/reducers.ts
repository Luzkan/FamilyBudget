import { fetchTypes } from '../utils/types';

export const reducersMisc = {
  restCheck: (state = {}, action: { type: string; data: any }) => {
    const types = fetchTypes("rest_check");
    if (action.type === types.FETCH_SUCCESS_NEW) return action.data;
    return state;
  },

  expenseIncrement: (state = {}, action: { type: string; data: any }) => {
    const types = fetchTypes("expense_increment");
    if (action.type === types.FETCH_SUCCESS_NEW) return action.data;
    return state;
  },
};
