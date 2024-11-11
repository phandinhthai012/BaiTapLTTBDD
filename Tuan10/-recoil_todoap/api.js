import axios from 'axios';

const API_URL = 'https://64583ae61a4c152cf9937c0c.mockapi.io/api/v1/todo';

export const fetchTodos = () => axios.get(API_URL);
export const addTodo = (todo) => axios.post(API_URL, todo);
export const deleteTodo = (id) => axios.delete(`${API_URL}/${id}`);