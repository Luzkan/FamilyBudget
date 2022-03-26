import axios from 'axios'
import cookie from 'cookie'

import AuthService from './auth.service'

const api = axios.create()

api.interceptors.request.use((config) => {
  const { csrftoken } = cookie.parse(document.cookie)
  if (csrftoken) config.headers['X-CSRFTOKEN'] = csrftoken

  const token = AuthService.getAuthToken()
  if (token) config.headers.Authorization = `Token ${token}`
  return config
})

export default api
