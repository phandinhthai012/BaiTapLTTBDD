import {createSlice,configureStore,createAsyncThunk} from '@reduxjs/toolkit'
// import axios from 'axios'
// createAsyncThunk

const productSlice = createSlice({
  name:'products',
  initialState:{
    selectedCategory: 'Smart Phone',
    filter: 'Best Sales',
    products:[
      { id: 1, category: 'Smart Phone', type: 'Best Sales', name: 'iPhone 13', img: require('./Data/1.png') },
      { id: 2, category: 'Smart Phone', type: 'Best Matched', name: 'Samsung Galaxy S21', img: require('./Data/1.png') },
      { id: 3, category: 'Smart Phone', type: 'Popular', name: 'OnePlus 9', img: require('./Data/1.png') },
      { id: 4, category: 'Ipad', type: 'Best Sales', name: 'iPad Pro', img: require('./Data/1.png') },
      { id: 5, category: 'Ipad', type: 'Best Matched', name: 'iPad Air', img: require('./Data/1.png') },
      { id: 6, category: 'Ipad', type: 'Popular', name: 'iPad Mini', img: require('./Data/1.png') },
      { id: 7, category: 'MacBook', type: 'Best Sales', name: 'MacBook Pro', img: require('./Data/1.png') },
      { id: 8, category: 'MacBook', type: 'Best Matched', name: 'MacBook Air', img: require('./Data/1.png') },
      { id: 9, category: 'MacBook', type: 'Popular', name: 'MacBook', img: require('./Data/1.png') },
    ],
    categories :['Ipad','Smart Phone','MacBook']
  },
  reducers:{
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.filter = 'Best Sales';
    },
    setFilter: (state,action)=>{
      state.filter=action.payload
    }
  }
})

const store = configureStore({
  reducer:{
    products: productSlice.reducer
  }
})
// export const {increment,decrement,incrementByAmount} = counterSlice.actions
export const {setCategory,setFilter} = productSlice.actions
export default store;
