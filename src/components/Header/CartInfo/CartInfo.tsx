import styles from './CartInfo.module.scss';
import { BiCart } from 'react-icons/bi';
type Props = {};
export const CartInfo = (props: Props) => {
  return (
    <div className={styles.cartinfo_container}>
      <div className={styles.total_price_box}>{0} €</div>
      <div className={styles.separation_box}></div>
      <div className={styles.item_amount_box}>
        <BiCart className={styles.cart_icon} color="white" />
        <div className={styles.item_amount}>{0}</div>
      </div>
    </div>
  );
};
