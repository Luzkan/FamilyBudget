import { fetchTypes } from "../utils/Types";
import { Dispatch } from "../../types/dispatch";
import BudgetService from "../../services/budget.service";


export const creatorsBudgets = {
  getAll: () => {
    return async (dispatch: Dispatch) => {
      const types = fetchTypes("budgets");
      dispatch({ type: types.FETCH_REQUESTED });

      await BudgetService.getAll()
        .then((response) => {
          dispatch({ type: types.FETCH_SUCCESS, data: response.data });
        })
        .catch((error) => {
          dispatch({ type: types.FETCH_ERROR, error });
        });
    };
  },
};
