import { connectRouter } from 'connected-react-router';
import { BrowserHistory } from 'history';
import { combineReducers } from 'redux';

import { restCheckReducer as restCheck } from '../api/rest_check';
import { restSendExpense as expense } from '../api/expense';

export const createRootReducer = (history: BrowserHistory) => {
  return combineReducers({
    router: connectRouter(history),
    restCheck,
    expense,

  });
};
