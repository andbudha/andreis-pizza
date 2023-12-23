import { useState } from 'react';
import styles from './Filter.module.scss';
import { FilterButton } from './FilterButton/FilterButton';
type Props = {};
export const Filter = (props: Props) => {
  // const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [activeType, setActiveType] = useState('All');
  const pizzaType = ['All', 'Meat Lovers', 'Cheese', 'Vegetarian'];

  // const operateMenuHandler = () => {
  //   setShowFilterMenu(!showFilterMenu);
  // };
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
