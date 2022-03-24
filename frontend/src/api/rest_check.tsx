import api from './api';

const types = {
  FETCH_REQUESTED: 'rest_check/FETCH_REQUESTED',
  FETCH_SUCCESS: 'rest_check/FETCH_SUCCESS',
  FETCH_ERROR: 'rest_check/FETCH_ERROR',
};

// Action creators
export const creators = {
  fetchRestCheck: () => {
    return async (dispatch: (arg0: { type: string; data?: any; error?: any; }) => void) => {
      dispatch({ type: types.FETCH_REQUESTED });
      try {
        const res = await api.get('/api/rest/rest-check/');
        dispatch({ type: types.FETCH_SUCCESS, data: res.data });
      } catch (error) {
        dispatch({ type: types.FETCH_ERROR, error });
      }
    };
  },
};

export const restCheckReducer = (state = {}, action: { type: string; data: any; }) => {
  if (action.type === types.FETCH_SUCCESS) return action.data;
  return state;
};
