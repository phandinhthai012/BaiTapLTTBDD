import { ADD_TODO, REMOVE_TODO, SET_TODOS } from './toDoActions';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.todo] };
    case REMOVE_TODO:
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.id) };
    case SET_TODOS:
      return { ...state, todos: action.todos };
    default:
      return state;
  }
};

export default todoReducer;
