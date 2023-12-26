import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartPizza } from '../../assets/types/types';
import { getLocalStorageItems } from '../../assets/localSorageItems/localStorageItems';

const slice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: getLocalStorageItems() || ([] as CartPizza[]),
    totalItemAmount: 0 as number,
    totalPrice: 0 as number,
  },
  reducers: {
    addPizza: (state, action: PayloadAction<{ addedPizza: CartPizza }>) => {
      let foundPizza = state.cartItems.find(
        (pizza: CartPizza) => pizza.id === action.payload.addedPizza.id
      );
      if (!foundPizza) {
        state.cartItems.unshift({ ...action.payload.addedPizza, count: 1 });
      } else if (foundPizza && foundPizza.count) {
        foundPizza.count++;
      }

      state.totalItemAmount = state.cartItems.reduce(
        (amount: number, item: CartPizza) =>
          item.count ? amount + item.count : 0,
        0
      );
      state.totalPrice = state.cartItems.reduce(
        (amount: number, item: CartPizza) =>
          item.count ? amount + item.count * item.price : 0,
        0
      );
    },
    addSimilarPizza: (state, action: PayloadAction<{ id: string }>) => {
      let foundItem = state.cartItems.find(
        (pizza: CartPizza) => pizza.id === action.payload.id
      );
      if (foundItem && foundItem.count) {
        foundItem.count++;
      }
      state.totalItemAmount = state.cartItems.reduce(
        (amount: number, item: CartPizza) =>
          item.count ? amount + item.count : 0,
        0
      );
      state.totalPrice = state.cartItems.reduce(
        (amount: number, item: CartPizza) =>
          item.count ? amount + item.count * item.price : 0,
        0
      );
    },
    removeSimilarPizza: (state, action: PayloadAction<{ id: string }>) => {
      let foundItem = state.cartItems.find(
        (pizza: CartPizza) => pizza.id === action.payload.id
      );
      if (foundItem && foundItem.count) {
        foundItem.count--;
      }
      state.totalItemAmount = state.cartItems.reduce(
        (amount: number, item: CartPizza) =>
          item.count ? amount + item.count : 0,
        0
      );
      state.totalPrice = state.cartItems.reduce(
        (amount: number, item: CartPizza) =>
          item.count ? amount + item.count * item.price : 0,
        0
      );
    },
    emptyCart: (state, action: PayloadAction<[]>) => {
      state.cartItems = action.payload;
      state.totalItemAmount = 0;
      state.totalPrice = 0;
    },
    removePizza: (state, action: PayloadAction<{ id: string }>) => {
      state.cartItems = state.cartItems.filter(
        (item: CartPizza) => item.id !== action.payload.id
      );
      state.totalItemAmount = state.cartItems.reduce(
        (amount: number, item: CartPizza) =>
          item.count ? amount + item.count : 0,
        0
      );
      state.totalPrice = state.cartItems.reduce(
        (amount: number, item: CartPizza) =>
          item.count ? amount + item.count * item.price : 0,
        0
      );
    },
  },
});

export const cart = slice.reducer;

export const cartActions = slice.actions;
