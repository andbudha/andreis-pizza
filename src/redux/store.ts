import { configureStore } from '@reduxjs/toolkit';
import { cart } from './slices/cartSlice';
import { useDispatch } from 'react-redux';
import { pizzas } from './slices/pizzaSlice';
import { filters } from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    cart,
    pizzas,
    filters,
  },
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
