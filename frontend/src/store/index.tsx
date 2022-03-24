import { routerMiddleware } from "connected-react-router";
import { Action, createBrowserHistory } from "history";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createRootReducer } from "./reducers";
import thunk from "redux-thunk";

export const history = createBrowserHistory();

const enhancer = composeWithDevTools(
  applyMiddleware(thunk, routerMiddleware(history))
);

const configureStore = (preloadedState: {
  router?: { location: { query: { [x: string]: string } }; action: Action };
  restCheck?: any;
}) => {
  return createStore(createRootReducer(history), preloadedState, enhancer);
};

export default configureStore;
