import { routerMiddleware } from "connected-react-router";
import { Action, createBrowserHistory } from "history";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { createRootReducer } from "./reducers";

export const history = createBrowserHistory();

const rootReducer = createRootReducer(history);

const enhancer = composeWithDevTools(
  applyMiddleware(thunk, routerMiddleware(history))
);

const configureStore = (preloadedState: {
  router?: { location: { query: { [x: string]: string } }; action: Action };
  restCheck?: any;
}) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
