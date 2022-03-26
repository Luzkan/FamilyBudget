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
        return action.data.budgets.length === 0
          ? action.data
          : {
              budgets: [...state.budgets, action.data.budgets[0]],
            };
      case types.FETCH_SUCCESS_TRANSACTION:
        console.log(action.data);
        console.log(state.budgets);
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
  },
};
