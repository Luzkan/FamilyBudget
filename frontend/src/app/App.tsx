import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore, { history } from "../store";
import Router from "./router";

const store = configureStore({});

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <ConnectedRouter history={history}></ConnectedRouter>
      <Router />
    </Provider>
  </BrowserRouter>
);

export default App;
