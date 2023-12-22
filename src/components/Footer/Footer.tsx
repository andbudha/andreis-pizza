import { useSelector } from 'react-redux';
import { AppRootState } from '../../redux/store';
import styles from './Footer.module.scss';
import { Paginator } from '../Paginator/Paginator';

type Props = {};
export const Footer = (props: Props) => {
  const cartItemAmount = useSelector<AppRootState, number>(
    (state) => state.cart.totalItemAmount
  );
  const totalPrice = useSelector<AppRootState, number>(
    (state) => state.cart.totalPrice
  );
  return (
    <div className={styles.footer_container}>
      {/* <div className={styles.info_box}>
        <div className={styles.total_price}>
          <h3>Total price:</h3>
          <h3>
            <span>{totalPrice} €.</span>
          </h3>
        </div>
        <div className={styles.total_items}>
          <h3>Items in cart:</h3>
          <h3>
            <span>
              {cartItemAmount} {cartItemAmount > 1 ? 'pcs.' : 'pc.'}
            </span>
          </h3>
        </div>
      </div> */}
      <div className={styles.pagination_box}>
        <Paginator />
      </div>
    </div>
  );
};
