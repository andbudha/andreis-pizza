import { useState } from 'react';
import styles from './Filter.module.scss';
import { FilterButton } from './FilterButton/FilterButton';
import { AppRootState, useAppDispatch } from '../../redux/store';
import { pizzasActions } from '../../redux/slices/pizzaSlice';
import { useSelector } from 'react-redux';
type FilterProps = {};
export const Filter = ({}: FilterProps) => {
  const dispatch = useAppDispatch();
  const activeType = useSelector<AppRootState, string>(
    (state) => state.pizzas.activeType
  );
  const pizzaType = ['All', 'Meat Lovers', 'Cheese', 'Vegetarian'];
  const activeCategory = pizzaType.findIndex((item) => item === activeType);
  dispatch(pizzasActions.setActiveCategory({ category: activeCategory }));

  return (
    <div className={styles.filter_container}>
      <div className={styles.filter_box}>
        {pizzaType.map((type) => (
          <FilterButton key={type} type={type} />
        ))}
      </div>
    </div>
  );
};
