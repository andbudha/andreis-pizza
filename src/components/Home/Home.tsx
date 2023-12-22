import { useEffect } from 'react';
import { Filter } from '../Filter/Filter';
import { Footer } from '../Footer/Footer';
import { PizzaCard } from '../PizzaCard/PizzaCard';
import styles from './Home.module.scss';
import { Pizza } from '../../assets/types/types';
import { AppRootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { pizzaSliceThunks } from '../../redux/slices/pizzaSlice';
import { PizzaCardSkeleton } from '../PizzaCard/PizzaCardSkeleton/PizzaCardSkeleton';

type Props = {};
export const Home = (props: Props) => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector<AppRootState, boolean>(
    (state) => state.pizzas.isLoading
  );
  const allPizzas = useSelector<AppRootState, Pizza[]>(
    (state) => state.pizzas.pizzas
  );
  const itemsPerPage = useSelector<AppRootState, number>(
    (state) => state.filters.itemsPerPage
  );
  const currentPage = useSelector<AppRootState, number>(
    (state) => state.filters.selectedPage
  );

  // Logic to display the items for the current page
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const pizzas = allPizzas.slice(firstItemIndex, lastItemIndex);

  useEffect(() => {
    dispatch(pizzaSliceThunks.fetchPizzas());
  }, []);

  const pizzaList = pizzas.map((pizza) => {
    return (
      <>
        <div key={pizza.id}>
          {isLoading ? (
            <PizzaCardSkeleton />
          ) : (
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
          )}
        </div>
      </>
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
