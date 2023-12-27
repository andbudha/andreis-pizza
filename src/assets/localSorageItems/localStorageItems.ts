import { CartPizza } from '../types/types';

export const getLocalStorageItems = () => {
  const items = localStorage.getItem('cart');
  if (items) {
    return JSON.parse(items);
  }
};

export const totalPriceFromLocalStorage = () => {
  if (getLocalStorageItems().length) {
    return getLocalStorageItems().reduce(
      (amount: number, item: CartPizza) =>
        item.count ? amount + item.count * item.price : 0,
      0
    );
  }
};

export const itemAmountFromLocalStorage = () => {
  if (getLocalStorageItems().length) {
    return getLocalStorageItems().reduce(
      (amount: number, item: CartPizza) =>
        item.count ? amount + item.count : 0,
      0
    );
  }
};

console.log(totalPriceFromLocalStorage);
console.log(itemAmountFromLocalStorage);
