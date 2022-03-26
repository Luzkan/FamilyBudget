import { AxiosResponse } from 'axios'

import { ResponseConfig } from '../types/response_config'
import { CredentialsData } from '../types/user'
import api from './api'

class UsersService {
  async getAll (): Promise<AxiosResponse<CredentialsData, ResponseConfig>> {
    return api.get('/api/rest/users/all/')
  }
}

export default new UsersService()
