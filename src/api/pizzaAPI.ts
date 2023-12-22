import axios from 'axios';
import { Pizza } from '../assets/types/types';

export const instance = axios.create({
  baseURL: 'https://656897589927836bd975198a.mockapi.io/reactpizza/api/1/items',
});

export const pizzaAPI = {
  fetchPizzas: () => {
    return instance.get<Pizza[]>('');
    // return instance.get<Pizza[]>('?&limit=6&page=1');
  },
};
