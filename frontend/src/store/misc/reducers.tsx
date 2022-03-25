import { fetchTypes } from "../utils/Types";

export const reducersMisc = {
  restCheck: (
    state = {},
    action: { type: string; data: any }
  ) => {
    const types = fetchTypes("rest_check");
    if (action.type === types.FETCH_SUCCESS) return action.data;
    return state;
  },

  expenseIncrement: (
    state = {},
    action: { type: string; data: any }
  ) => {
    const types = fetchTypes("expense_increment");
    if (action.type === types.FETCH_SUCCESS) return action.data;
    return state;
  }
}
