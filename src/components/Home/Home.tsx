import { useEffect, useState } from 'react';
import { Filter } from '../Filter/Filter';
import { Footer } from '../Footer/Footer';
import { PizzaCard } from '../PizzaCard/PizzaCard';
import styles from './Home.module.scss';
import { Pizza } from '../../assets/types/types';
import { AppRootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { pizzaSliceThunks } from '../../redux/slices/pizzaSlice';
import { FaChevronUp } from 'react-icons/fa6';
import { IoFilter } from 'react-icons/io5';
import { PizzaCardSkeleton } from '../PizzaCard/PizzaCardSkeleton/PizzaCardSkeleton';
import { NoMatchPizzaCard } from '../PizzaCard/NoMatchPizzaCard/NoMatchPizzaCard';

export const Home = () => {
  const dispatch = useAppDispatch();
  const [showFilterMenu, setShowFilterMenu] = useState(false);
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
  const activeCategory = useSelector<AppRootState, number>(
    (state) => state.pizzas.activeCategory
  );

  const filteredPizzas =
    activeCategory === 0
      ? allPizzas
      : allPizzas.filter((pizza) => pizza.category === activeCategory);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const pizzas = filteredPizzas.slice(firstItemIndex, lastItemIndex);

  useEffect(() => {
    dispatch(pizzaSliceThunks.fetchPizzas());
  }, [activeCategory]);

  const pizzaList = pizzas.map((pizza) => {
    return (
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
    );
  });
  const emptyCard = isLoading ? <PizzaCardSkeleton /> : <NoMatchPizzaCard />;

  const operateMenuHandler = () => {
    setShowFilterMenu(!showFilterMenu);
  };

  return (
    <div className={styles.home_container}>
      <div className={styles.filtering_box} onClick={operateMenuHandler}>
        {showFilterMenu ? (
          <FaChevronUp className={styles.chevron_icon} />
        ) : (
          <IoFilter className={styles.filter_icon} />
        )}
      </div>
      {showFilterMenu && <Filter />}
      <div className={styles.pizza_grid_box}>
        {pizzaList.length ? pizzaList : emptyCard}
      </div>
      <Footer pizzas={pizzas} />
    </div>
  );
};
