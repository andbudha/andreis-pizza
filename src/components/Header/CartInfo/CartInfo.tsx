import { Link } from 'react-router-dom';
import styles from './CartInfo.module.scss';
import { BiCart } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { AppRootState } from '../../../redux/store';
type Props = {};
export const CartInfo = (props: Props) => {
  const cartItemAmount = useSelector<AppRootState, number>(
    (state) => state.cart.totalItemAmount
  );
  const totalPrice = useSelector<AppRootState, number>(
    (state) => state.cart.totalPrice
  );

  return (
    <Link to={'/cart'} className={styles.link}>
      <>
        <div className={styles.cartinfo_container}>
          <div className={styles.total_price_box}>{totalPrice}€</div>
          <div className={styles.separation_box}></div>
          <div className={styles.item_amount_box}>
            <BiCart className={styles.cart_icon} color="white" />
            <div className={styles.item_amount}>{cartItemAmount}</div>
          </div>
        </div>
      </>
    </Link>
  );
};
