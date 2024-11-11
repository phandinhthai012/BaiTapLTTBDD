import { atom, selector } from 'recoil';
import { fetchTodos } from './api';

export const todoListState = atom({
  key: 'todoListState',
  default: selector({
    key: 'todoListState/default',
    get: async () => {
      const response = await fetchTodos();
      return response.data;
    },
  }),
});

export const todoInputState = atom({
  key: 'todoInputState',
  default: '',
});
