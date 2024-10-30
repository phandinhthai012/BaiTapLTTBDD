// // todosSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const todosSlice = createSlice({
//   name: 'todos',
//   initialState: [],
//   reducers: {
//     addTodo: (state, action) => {
//       state.push({ id: Date.now(), text: action.payload, completed: false });
//     },
//     toggleTodo: (state, action) => {
//       const todo = state.find((todo) => todo.id === action.payload);
//       if (todo) {
//         todo.completed = !todo.completed;
//       }
//     },
//     removeTodo: (state, action) => {
//       return state.filter((todo) => todo.id !== action.payload);
//     },
//   },
// });

// export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;

// export default todosSlice.reducer;
// todosSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thực hiện fetch tất cả các todos
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('https://64583ae61a4c152cf9937c0c.mockapi.io/api/v1/todo');
  return response.data;
});

// Thực hiện thêm todo
export const addTodo = createAsyncThunk('todos/addTodo', async (text) => {
  const response = await axios.post('https://64583ae61a4c152cf9937c0c.mockapi.io/api/v1/todo', { text });
  return response.data;
});

// Thực hiện toggle todo
export const toggleTodo = createAsyncThunk('todos/toggleTodo', async (id) => {
  const response = await axios.patch(`https://64583ae61a4c152cf9937c0c.mockapi.io/api/v1/todo/${id}`);
  return response.data;
});

// Thực hiện xóa todo
export const removeTodo = createAsyncThunk('todos/removeTodo', async (id) => {
  await axios.delete(`https://64583ae61a4c152cf9937c0c.mockapi.io/api/v1/todo/${id}`);
  return id;
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch todos
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Add todo
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      // Toggle todo
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const todo = state.items.find((item) => item.id === action.payload.id);
        if (todo) {
          todo.completed = action.payload.completed;
        }
      })

      // Remove todo
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export default todosSlice.reducer;
