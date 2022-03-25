import axios from 'axios';
import cookie from 'cookie';
import { RootStateOrAny, useSelector } from 'react-redux';
import AuthService from './auth.service';

const api = axios.create();

api.interceptors.request.use((config) => {
  const { csrftoken } = cookie.parse(document.cookie);
  if (csrftoken) config.headers['X-CSRFTOKEN'] = csrftoken;

  // Grab Token from local storage
  const token = AuthService.getAuthToken();
  if ( token ) config.headers['Authorization'] = `Token ${token}`;
  return config;
});

export default api;
