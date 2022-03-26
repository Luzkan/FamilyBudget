import { UserGetAllResponse } from 'types/user'
import { fetchTypes } from '../utils/types'

export const reducersUsers = {
  users: (
    state: UserGetAllResponse = { users: [] },
    action: { type: string; data: UserGetAllResponse }
  ) => {
    if (action.type === fetchTypes('users').FETCH_SUCCESS) return action.data
    return state
  }
}
