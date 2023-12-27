import styles from './EmptyCart.module.scss';
import emptyCart from '../../../../assets/images/cart/empty_cart.png';
import { IoChevronBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';

type Props = {};
export const EmptyCart = (props: Props) => {
  return (
    <div className={styles.empty_cart_container}>
      <h2>Your cart is currently empty</h2>
      <img
        className={styles.empty_cart_img}
        src={emptyCart}
        alt="empty shopping cart"
      />
      <Link to={'/'} className={styles.back_to_main_link}>
        <div className={styles.back_home_btn_box}>
          <div className={styles.back_home_btn}>
            <IoChevronBack className={styles.back_to_main_icon} />
            <span>Main</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
