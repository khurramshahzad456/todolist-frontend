/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from 'react';
import { jwtDecode } from 'jwt-decode';

import api from '../config/api';
import { SIGN_IN_ENDPOINT, SIGN_UP_ENDPOINT } from '../config/routes';
import {
  isAuthenticated as checkAuth,
  localStorageToken,
  TOKEN_KEY,
} from '../config/constants';
import { IUser } from '../interfaces';
import { storageService } from '../services/storage';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(checkAuth);
  const [user, setUser] = useState<IUser>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = useCallback(async (email: string, password: string) => {
    setLoading(true);
    try {
      const { data } = await api.post(SIGN_IN_ENDPOINT, { email, password });
      storageService.setItem(TOKEN_KEY, data.token);
      const user: IUser = jwtDecode(data.token);
      console.log({ data, user });
      setUser(user);
      setIsAuthenticated(true);
    } catch (err: any) {
      setError(err);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  }, []);

  const signUp = useCallback(
    async (email: string, password: string, username: string) => {
      setLoading(true);
      try {
        await api.post(SIGN_UP_ENDPOINT, { email, password, username });
        return true;
      } catch (err: any) {
        setError(err);
        return false;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const logout = useCallback(() => {
    storageService.removeItem(TOKEN_KEY);
    setIsAuthenticated(false);
  }, []);

  useEffect(() => {
    setIsAuthenticated(checkAuth);
    if (checkAuth) {
      setUser(jwtDecode(localStorageToken as string));
    }
  }, []);

  return { isAuthenticated, loading, error, login, logout, signUp, user };
};

export default useAuth;
