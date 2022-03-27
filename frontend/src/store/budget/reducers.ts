import { BudgetResponse } from "types/budget"

import { fetchTypes } from "../utils/types"

type Action = { type: string; data: BudgetResponse }

const isInitialized = (state: BudgetResponse) => state.budgets == null
const isOnPageWithoutBudgets = (action: Action) => action.data.budgets == null
const hasJustAddedBudget = (action: Action) => action.data.created === true

export const reducersBudgets = {
  budgets: (state: BudgetResponse = { budgets: [] }, action: Action) => {
    const types = fetchTypes("budgets")
    switch (action.type) {
      case types.FETCH_SUCCESS:
        console.log(action)
        console.log(state)
        if (isInitialized(state)) return action.data
        if (isOnPageWithoutBudgets(action)) return { budgets: null }
        if (hasJustAddedBudget(action))
          return { budgets: [...state.budgets, action.data.budgets[0]] }
        return action.data
      case types.FETCH_SUCCESS_NULL:
        return action.data
      case types.FETCH_SUCCESS_TRANSACTION:
        return {
          budgets: state.budgets.map((budget: { id: number }) =>
            budget.id === action.data.budgets[0].id
              ? action.data.budgets[0]
              : budget
          ),
        }
      default:
        return state
    }
  },
}
