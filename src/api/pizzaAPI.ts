import axios from 'axios';
import { Pizza } from '../assets/types/types';

export const instance = axios.create({
  baseURL: 'https://9e1375a72a3aaeea.mokky.dev/pizzas',
});

export const pizzaAPI = {
  fetchPizzas: () => {
    return instance.get<Pizza[]>('');
  },
};
