import { useSelector } from 'react-redux';
import { AppRootState, useAppDispatch } from '../../../redux/store';
import styles from './FilterButton.module.scss';
import { pizzasActions } from '../../../redux/slices/pizzaSlice';
import { ActiveType } from '../../../assets/types/types';

type FilterButtonProps = {
  type: string;
};
export const FilterButton = ({ type }: FilterButtonProps) => {
  const dispatch = useAppDispatch();
  const activeType = useSelector<AppRootState, ActiveType>(
    (state) => state.pizzas.activeType
  );
  const setActiveTypeHandler = (type: ActiveType) => {
    dispatch(pizzasActions.setActiveType({ activeType: type }));
  };
  return (
    <div
      className={`${styles.filter_btn} ${
        activeType === type ? styles.selected : ''
      }`}
      onClick={() => setActiveTypeHandler(type as ActiveType)}
    >
      {type}
    </div>
  );
};
