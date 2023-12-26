import { useSelector } from 'react-redux';
import { AppRootState, useAppDispatch } from '../../../redux/store';
import styles from './FilterButton.module.scss';
import { ActiveType } from '../../../assets/types/types';
import { filterActions } from '../../../redux/slices/filterSlice';

type FilterButtonProps = {
  type: string;
};
export const FilterButton = ({ type }: FilterButtonProps) => {
  const dispatch = useAppDispatch();
  const activeType = useSelector<AppRootState, ActiveType>(
    (state) => state.filters.activeType
  );
  const setActiveTypeHandler = (type: ActiveType) => {
    dispatch(filterActions.setActiveType({ activeType: type }));
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
