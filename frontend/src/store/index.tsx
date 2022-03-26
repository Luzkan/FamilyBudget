import { routerMiddleware } from "connected-react-router"
import { Action, createBrowserHistory } from "history"
import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { Budget } from "types/budget"
import { CredentialsData, UserGetAllResponse } from "types/user"

import { createRootReducer } from "./reducers"

export const history = createBrowserHistory()

const enhancer = composeWithDevTools(
  applyMiddleware(thunk, routerMiddleware(history))
)

const configureStore = (preloadedState: {
  router?: { location: { query: { [x: string]: string } }; action: Action }
  credentials?: CredentialsData
  budgets?: { budgets: Budget[] }
  users?: UserGetAllResponse
}) => {
  return createStore(createRootReducer(history), preloadedState, enhancer)
}

export default configureStore
