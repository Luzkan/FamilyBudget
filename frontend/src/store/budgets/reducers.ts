import { fetchTypes } from "../utils/Types";

export const reducersBudgets = {
  budgets: (
    state = {},
    action: { type: string; data: any }
  ) => {
    const types = fetchTypes("budgets");
    if (action.type === types.FETCH_SUCCESS) return action.data;
    return state;
  },
};