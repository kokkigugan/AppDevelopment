// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Define your featured products slice
const featuredProductsSlice = createSlice({
  name: 'featuredProducts',
  initialState: {
    products: [
      {
        id: 1,
        name: 'Pills',
        description: 'Product description goes here.',
        imageUrl: '../src/img/PILLS FOR THRILLS.jpeg',
      },
      {
        id: 2,
        name: 'Injections',
        description: 'Product description goes here.',
        imageUrl: 'img/injection.jpeg',
      },
    ],
  },
  reducers: {},
});
const store = configureStore({
  reducer: {
    featuredProducts: featuredProductsSlice.reducer,
    // Add more slices as needed
  },
});

export default store;
