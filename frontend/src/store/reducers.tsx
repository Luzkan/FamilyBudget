import { connectRouter } from 'connected-react-router';
import { BrowserHistory } from 'history';
import { combineReducers } from 'redux';
import { reducersAuth } from './auth/reducers';
import { reducersBudgets } from './budget/reducers';
import { reducersMisc } from './misc/reducers';

export const createRootReducer = (history: BrowserHistory) => {
  return combineReducers({
    router: connectRouter(history),
    login: reducersAuth.login,
    register: reducersAuth.register,
    restCheck: reducersMisc.restCheck,
    expense: reducersMisc.expenseIncrement,
    budgets: reducersBudgets.budgets,
  });
};
