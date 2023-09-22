import { configureStore, createSlice } from '@reduxjs/toolkit';
import br from '../img/PILLS FOR THRILLS.jpeg';
import br1 from '../img/injection.jpeg';

// Define a slice for featured products
const featuredProductsSlice = createSlice({
  name: 'featuredProducts',
  initialState: {
    products: [
      {
        id: 1,
        name: 'Pills',
        description: 'Product description goes here.',
        imageUrl: br,
      },
      {
        id: 2,
        name: 'Injections',
        description: 'Product description goes here.',
        imageUrl: br1,
      },
    ],
  },
  reducers: {},
});

// Define a slice for user data
const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    email: '',
    // Add more user-related fields as needed
  },
  reducers: {
    setUser: (state, action) => {
      // Update user-related state based on the action payload
      return {
        ...state,
        ...action.payload,
      };
    },
    // Add more user-related reducers as needed
  },
});

// Configure the Redux store
const store = configureStore({
  reducer: {
    featuredProducts: featuredProductsSlice.reducer,
    user: userSlice.reducer, // Add the user slice to the store
    // Add more slices as needed
  },
});

export const { setUser } = userSlice.actions; // Export user-related actions

export default store;
