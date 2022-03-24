import { connectRouter } from 'connected-react-router';
import { BrowserHistory } from 'history';
import { combineReducers } from 'redux';
import { restCheckReducer as restCheck } from '../api/rest_check';
import { expenseReducer as expense } from '../api/expense';
import { loginReducer } from '../api/auth/login';
import { registerReducer } from '../api/auth/register';

export const createRootReducer = (history: BrowserHistory) => {
  return combineReducers({
    router: connectRouter(history),
    login: loginReducer,
    register: registerReducer,
    restCheck: restCheck,
    expense: expense,
  });
};
