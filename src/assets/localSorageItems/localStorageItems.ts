export const getLocalStorageItems = () => {
  const items = localStorage.getItem('cart');
  if (items) {
    return JSON.parse(items);
  }
};
