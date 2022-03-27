import BudgetService from "services/budget.service"
import { AddNewBudgetForm, UpdateBudgetUsers } from "types/budget"
import { Dispatch } from "types/dispatch"
import TransactionService from "services/transaction.service"
import { TransactionForm } from "types/transactions/transaction"

import { fetchTypes } from "../utils/types"

export const creatorsBudgets = {
  get: (searchQuery: string) => {
    return async (dispatch: Dispatch) => {
      const types = fetchTypes("budgets")
      dispatch({ type: types.FETCH_REQUESTED })
      await BudgetService.get(searchQuery)
        .then((response) => {
          if (searchQuery === "") {
            dispatch({ type: types.FETCH_SUCCESS, data: response.data })
          } else {
            dispatch({ type: types.FETCH_SUCCESS_SEARCH, data: response.data })
          }
        })
        .catch((error) => {
          dispatch({ type: types.FETCH_ERROR, error })
        })
    }
  },
  add: (budgetForm: AddNewBudgetForm) => {
    return async (dispatch: Dispatch) => {
      const types = fetchTypes("budgets")
      dispatch({ type: types.FETCH_REQUESTED })

      await BudgetService.add(budgetForm).then((response) => {
        dispatch({ type: types.FETCH_SUCCESS, data: response.data })
      })
    }
  },
  updateUsers: (users: UpdateBudgetUsers) => {
    return async (dispatch: Dispatch) => {
      const types = fetchTypes("budgets")
      dispatch({ type: types.FETCH_REQUESTED })
      await BudgetService.updateUsers(users).then((response) => {
        dispatch({
          type: types.FETCH_SUCCESS_TRANSACTION,
          data: response.data,
        })
      })
    }
  },
}

export const creatorsTransaction = {
  add: (transactionForm: TransactionForm) => {
    return async (dispatch: Dispatch) => {
      const types = fetchTypes("budgets")
      dispatch({ type: types.FETCH_REQUESTED })

      await TransactionService.add(transactionForm).then((response) => {
        dispatch({
          type: types.FETCH_SUCCESS_TRANSACTION,
          data: response.data,
        })
      })
    }
  },
}
