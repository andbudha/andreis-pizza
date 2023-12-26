export type Pizza = {
  category: number;
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  rating: number;
  sizes: number[];
  types: number[];
};

export type CartPizza = {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  size: number;
  crust: string;
  count?: number | undefined;
};

export type ActiveType = 'All' | 'Meat Lovers' | 'Cheese' | 'Vegetarian';
