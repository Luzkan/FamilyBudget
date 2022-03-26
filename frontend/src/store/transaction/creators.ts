import TransactionService from "services/transaction.service";
import { Dispatch } from "types/dispatch";
import { TransactionForm } from "types/transaction_form";

import { fetchTypes } from "../utils/types";

export const creatorsTransaction = {
  add: (transactionForm: TransactionForm) => {
    return async (dispatch: Dispatch) => {
      const types = fetchTypes("transaction");
      dispatch({ type: types.FETCH_REQUESTED });

      await TransactionService.add(transactionForm).then((response) => {
        console.log("YAHOO")
        console.log(response)
        dispatch({ type: types.FETCH_SUCCESS_NEW, data: response.data });
      });
    };
  },
};
