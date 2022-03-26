import { BudgetResponse } from "types/budget";

import { fetchTypes } from "../utils/types";

export const reducersBudgets = {
  budgets: (
    state: BudgetResponse = { budgets: [] },
    action: { type: string; data: BudgetResponse }
  ) => {
    const types = fetchTypes("budgets");
    switch (action.type) {
      case types.FETCH_SUCCESS_NEW:
        return action.data;
      case types.FETCH_SUCCESS_APPEND:
        return {
          budgets: [...state.budgets, action.data.budgets[0]],
        };
      case types.FETCH_SUCCESS_TRANSACTION:
        return {
          budgets: state.budgets.map((budget) =>
            budget.id === action.data.budgets[0].id
              ? action.data.budgets[0]
              : budget
          ),
        };
      default:
        return state;
    }
  }
};
