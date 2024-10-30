export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const FETCH_TODOS = 'FETCH_TODOS';
export const SET_TODOS = 'SET_TODOS';

export const addTodo = (todo) => ({ type: ADD_TODO, todo });
export const removeTodo = (id) => ({ type: REMOVE_TODO, id });
export const fetchTodos = () => ({ type: FETCH_TODOS });
export const setTodos = (todos) => ({ type: SET_TODOS, todos });
