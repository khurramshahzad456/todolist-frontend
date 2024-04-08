import axios from 'axios';

import { ROUTES } from './routes';
import { BASE_URL, IsInDevelopment, TOKEN_KEY } from './constants';
import { storageService } from '../services/storage';

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = storageService.getItem(TOKEN_KEY);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  if (IsInDevelopment) {
    console.log('Development mode: Intercepting request', config);
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (IsInDevelopment) {
      console.error('Intercepting error response:', error.response);
    }
    if (error.response && error.response.status === 401) {
      localStorage.clear();
      window.location.href = ROUTES.LOGIN;
    }

    return Promise.reject(error);
  }
);

export default api;
