import { useEffect, useState } from 'react';
import { Filter } from '../Filter/Filter';
import { Footer } from '../Footer/Footer';
import { PizzaCard } from '../PizzaCard/PizzaCard';
import styles from './Home.module.scss';
import axios from 'axios';
import { Pizza } from '../../assets/types/types';

type Props = {};
export const Home = (props: Props) => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);

  console.log(pizzas);

  useEffect(() => {
    axios
      .get<Pizza[]>(
        'https://656897589927836bd975198a.mockapi.io/reactpizza/api/1/items?&limit=6&page=1'
      )
      .then((res) => {
        setPizzas(res.data);
      });
  }, []);

  const pizzaList = pizzas.map((pizza) => {
    return (
      <div key={pizza.id}>
        <PizzaCard
          category={pizza.category}
          id={pizza.id}
          imageUrl={pizza.imageUrl}
          name={pizza.name}
          price={pizza.price}
          rating={pizza.rating}
          sizes={pizza.sizes}
          types={pizza.types}
        />
      </div>
    );
  });

  return (
    <div className={styles.home_container}>
      <Filter />
      <div className={styles.pizza_grid_box}>{pizzaList}</div>
      <Footer />
    </div>
  );
};
