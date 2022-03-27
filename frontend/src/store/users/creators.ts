import UsersService from "services/users.service"
import { Dispatch } from "types/dispatch"

import { fetchTypes } from "../utils/types"

export const creatorsUsers = {
  getAll: () => {
    return async (dispatch: Dispatch) => {
      const types = fetchTypes("users")
      dispatch({ type: types.FETCH_REQUESTED })

      await UsersService.getAll()
        .then((response) => {
          dispatch({ type: types.FETCH_SUCCESS, data: response.data })
        })
        .catch((error) => {
          dispatch({ type: types.FETCH_ERROR, error })
        })
    }
  },
}
