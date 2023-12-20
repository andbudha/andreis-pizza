import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartPizza } from '../assets/types/types';

const slice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [] as CartPizza[],
  },
  reducers: {
    addPizza: (state, action: PayloadAction<{ addedPizza: CartPizza }>) => {
      state.cartItems.unshift(action.payload.addedPizza);
    },
  },
});

export const cart = slice.reducer;

export const cartActions = slice.actions;
