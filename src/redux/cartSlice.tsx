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
    emptyCart: (state, action: PayloadAction<[]>) => {
      state.cartItems = action.payload;
    },
    removePizza: (state, action: PayloadAction<{ id: string }>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const cart = slice.reducer;

export const cartActions = slice.actions;
