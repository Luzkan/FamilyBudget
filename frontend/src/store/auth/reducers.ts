import { CredentialsData } from "types/user"
import { fetchTypes } from "../utils/fetch_types"

export const reducersAuth = {
  credentials: (
    state: CredentialsData = { token: undefined, user: undefined },
    action: { type: string; data: CredentialsData }
  ) => {
    if (action.type === fetchTypes("credentials").FETCH_SUCCESS) {
      return action.data
    }
    return state
  },
}
