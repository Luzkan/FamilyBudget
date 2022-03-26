import { AxiosResponse } from 'axios'

import { ResponseConfig } from '../types/response_config'
import { CredentialsData, LoginCredentials, RegisterCredentials } from '../types/user'
import api from './api'

class AuthService {
  async login (
    loginCredentials: LoginCredentials
  ): Promise<AxiosResponse<CredentialsData, ResponseConfig>> {
    const response = await api.post('/api/rest/auth/login/', {
      email: loginCredentials.email,
      password: loginCredentials.password
    })
    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response
  }

  async register (
    registerCredentials: RegisterCredentials
  ): Promise<AxiosResponse<CredentialsData, ResponseConfig>> {
    const response = await api.post('/api/rest/auth/register/', {
      email: registerCredentials.email,
      password: registerCredentials.password
    })
    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response
  }

  async checkLoggedUserAuthorized (
    credentialsData: CredentialsData
  ): Promise<AxiosResponse<{ verified: boolean }, ResponseConfig>> {
    const response = await api.post('/api/rest/auth/check/', {
      token: credentialsData.token,
      email: credentialsData.user.email
    })
    if (!response.data.verified) {
      this.logout()
    }
    return response
  }

  logout (): void {
    localStorage.removeItem('user')
  }

  getCurrentUser (): CredentialsData | null {
    const userStr = localStorage.getItem('user')
    return userStr ? JSON.parse(userStr) : null
  }

  getAuthToken (): string | null {
    const user = this.getCurrentUser()
    return user ? user.token : null
  }
}

export default new AuthService()
