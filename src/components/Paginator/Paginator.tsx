import styles from './Paginator.module.scss';
import { useSelector } from 'react-redux';
import { AppRootState, useAppDispatch } from '../../redux/store';
import { Pizza } from '../../assets/types/types';
import { useState } from 'react';
import { filterActions } from '../../redux/slices/filterSlice';

type Props = {};
export const Paginator = (props: Props) => {
  const dispatch = useAppDispatch();
  const allPizzas = useSelector<AppRootState, Pizza[]>(
    (state) => state.pizzas.pizzas
  );
  const itemsPerPage = useSelector<AppRootState, number>(
    (state) => state.filters.itemsPerPage
  );
  const currentPage = useSelector<AppRootState, number>(
    (state) => state.filters.selectedPage
  );

  let pages = [];
  for (let i = 0; i < Math.ceil(allPizzas.length / itemsPerPage); i++) {
    pages.push(i + 1);
  }

  const handlePageChange = (page: number) => {
    dispatch(filterActions.setSelectedPage({ selectedPage: page }));
  };

  return (
    <div className={styles.paginator_container}>
      {pages.map((page, index) => (
        <div key={page} className={styles.page_button_box}>
          <button
            className={`${styles.page_button} ${
              page === currentPage ? styles.selected_page : ''
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        </div>
      ))}
    </div>
  );
};
