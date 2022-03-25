import api from "../../services/api";
import { fetchTypes } from "../utils/Types";

export const creators = {
  restCheck: () => {
    return async (
      dispatch: (arg0: { type: string; data?: any; error?: any }) => void
    ) => {
      const types = fetchTypes("rest_check");
      dispatch({ type: types.FETCH_REQUESTED });
      try {
        const res = await api.get("/api/rest/rest-check/");
        dispatch({ type: types.FETCH_SUCCESS, data: res.data });
      } catch (error) {
        dispatch({ type: types.FETCH_ERROR, error });
      }
    };
  },

  expenseIncrement: (number: number) => {
    return async (
      dispatch: (arg0: { type: string; data?: any; error?: any }) => void
    ) => {
      const types = fetchTypes("expense_increment");
      dispatch({ type: types.FETCH_REQUESTED });
      try {
        const res = await api.post("/api/rest/expense/", { expense: number });
        dispatch({ type: types.FETCH_SUCCESS, data: res.data });
      } catch (error) {
        dispatch({ type: types.FETCH_ERROR, error });
      }
    };
  },
};
