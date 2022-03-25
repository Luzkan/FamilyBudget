import { fetchTypes } from "../utils/Types";
import { Dispatch } from "../../types/dispatch";
import BudgetService from "../../services/budget.service";
import budgetService from "../../services/budget.service";
import { BudgetForm } from "../../types/budget";


export const creatorsBudgets = {
  getAll: () => {
    return async (dispatch: Dispatch) => {
      const types = fetchTypes("budgets");
      dispatch({ type: types.FETCH_REQUESTED });

      await BudgetService.getAll()
        .then((response) => {
          dispatch({ type: types.FETCH_SUCCESS_NEW, data: response.data });
        })
        .catch((error) => {
          dispatch({ type: types.FETCH_ERROR, error });
        });
    };
  },
  add: (budgetForm: BudgetForm) => {
    return async (dispatch: Dispatch) => {
      const types = fetchTypes("budgets");
      dispatch({ type: types.FETCH_REQUESTED });

      await budgetService.add(budgetForm)
        .then((response) => {
          
          dispatch({ type: types.FETCH_SUCCESS_APPEND, data: response.data });
        })
    };
  },
};
