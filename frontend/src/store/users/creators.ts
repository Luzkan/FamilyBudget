import UsersService from "services/users.service";
import { BudgetForm } from "types/budget";
import { Dispatch } from "types/dispatch";
import TransactionService from "services/transaction.service";
import { TransactionForm } from "types/transaction_form";


import { fetchTypes } from "../utils/types";

export const creatorsUsers = {
  getAll: () => {
    return async (dispatch: Dispatch) => {
      const types = fetchTypes("users");
      dispatch({ type: types.FETCH_REQUESTED });

      await UsersService.getAll()
        .then((response) => {
          console.log(response)
          dispatch({ type: types.FETCH_SUCCESS, data: response.data });
        })
        .catch((error) => {
          dispatch({ type: types.FETCH_ERROR, error });
        });
    };
  },

};
