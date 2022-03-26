import { connectRouter } from "connected-react-router"
import { BrowserHistory } from "history"
import { combineReducers } from "redux"
import { reducersAuth } from "./auth/reducers"
import { reducersBudgets } from "./budget/reducers"
import { reducersUsers } from "./users/reducers"

export const createRootReducer = (history: BrowserHistory) => {
  return combineReducers({
    router: connectRouter(history),
    credentials: reducersAuth.credentials,
    budgets: reducersBudgets.budgets,
    users: reducersUsers.users,
  })
}
