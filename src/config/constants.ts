import { storageService } from '../services/storage';

export const BASE_URL = 'https://todolist-backend-henna.vercel.app/';
export const IsInDevelopment = process.env.NODE_ENV === 'development';
export const TOKEN_KEY = 'todo-list-token';
export const localStorageToken = storageService.getItem(TOKEN_KEY);
export const isAuthenticated = localStorageToken ? true : false;
