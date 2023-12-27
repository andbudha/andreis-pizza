import styles from './PageNotFound.module.scss';
import pizzaSlice from '../../../assets/images/no_match.png';

export const PageNotFound = () => {
  return (
    <div className={styles.page_not_found_container}>
      <div className={styles.text_box}>
        <h1>404</h1>
        <h3>Page Not Found</h3>
      </div>
      <div className={styles.image_box}>
        <img
          className={styles.pizza_slice_img}
          src={pizzaSlice}
          alt="pizza-slice"
        />
      </div>
    </div>
  );
};
