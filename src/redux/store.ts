import { configureStore } from '@reduxjs/toolkit';
import { cart } from './cartSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    cart,
  },
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
