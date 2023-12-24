import { useState } from 'react';
import styles from './Filter.module.scss';
import { FilterButton } from './FilterButton/FilterButton';
import { useAppDispatch } from '../../redux/store';
import { pizzasActions } from '../../redux/slices/pizzaSlice';
type FilterProps = {};
export const Filter = ({}: FilterProps) => {
  const dispatch = useAppDispatch();
  const [activeType, setActiveType] = useState('All');
  const pizzaType = ['All', 'Meat Lovers', 'Cheese', 'Vegetarian'];
  const activeCategory = pizzaType.findIndex((item) => item === activeType);
  dispatch(pizzasActions.setActiveCategory({ category: activeCategory }));

  return (
    <div className={styles.filter_container}>
      <div className={styles.filter_box}>
        {pizzaType.map((type) => (
          <FilterButton
            key={type}
            type={type}
            activeType={activeType}
            setActiveType={setActiveType}
          />
        ))}
      </div>
    </div>
  );
};
