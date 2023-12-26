import { ChangeEvent, useRef } from 'react';
import styles from './Search.module.scss';
import { IoMdSearch, IoMdClose } from 'react-icons/io';
import { AppRootState, useAppDispatch } from '../../../redux/store';
import { filterActions } from '../../../redux/slices/filterSlice';
import { useSelector } from 'react-redux';

export const Search = () => {
  const disptach = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const inputValue = useSelector<AppRootState, string>(
    (state) => state.filters.searchValue
  );

  const inputValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    disptach(
      filterActions.setSearchValue({ searchValue: event.currentTarget.value })
    );
  };

  const emptyImputHandler = () => {
    disptach(filterActions.setSearchValue({ searchValue: '' }));
    inputRef.current?.focus();
  };
  return (
    <div className={styles.search_container}>
      <div className={styles.search_box}>
        <IoMdSearch className={styles.search_icon} />
        <input
          ref={inputRef}
          value={inputValue}
          className={styles.input_box}
          placeholder="Search pizza..."
          onChange={inputValueHandler}
        />
        <IoMdClose className={styles.remove_icon} onClick={emptyImputHandler} />
      </div>
    </div>
  );
};
