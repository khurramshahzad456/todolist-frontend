/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';

import api from '../config/api';
import { ITodo } from '../interfaces';
import { TODOS_ENDPOINT } from '../config/routes';

const useTodos = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const response = await api.get(TODOS_ENDPOINT);
      setTodos(response.data.todos);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const createTodo = async (todo: ITodo) => {
    setLoading(true);
    try {
      await api.post(TODOS_ENDPOINT, todo);
      fetchTodos();
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const updateTodo = async (updates: ITodo) => {
    setLoading(true);
    try {
      await api.put(TODOS_ENDPOINT, updates);
      fetchTodos();
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteTodo = async (id: string) => {
    setLoading(true);
    try {
      await api.delete(`${TODOS_ENDPOINT}/${id}`);
      fetchTodos();
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return { todos, loading, error, createTodo, updateTodo, deleteTodo };
};

export default useTodos;
