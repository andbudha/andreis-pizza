import styles from './Cart.module.scss';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdEuroSymbol } from 'react-icons/md';
import { IoChevronBack } from 'react-icons/io5';
import { CartItem } from './CartItem/CartItem';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppRootState, useAppDispatch } from '../../redux/store';
import { CartPizza } from '../../assets/types/types';
import { cartActions } from '../../redux/slices/cartSlice';
import { EmptyCart } from './EmptyCart/EmptyCart';
type CartProps = {};
export const Cart = (props: CartProps) => {
  const dispatch = useAppDispatch();
  const cartItems = useSelector<AppRootState, CartPizza[]>(
    (state) => state.cart.cartItems
  );

  const cartList = cartItems.map((item) => {
    return <CartItem key={item.id} item={item} />;
  });

  const emptyCartHandler = () => {
    dispatch(cartActions.emptyCart([]));
  };

  if (!cartItems.length) {
    return <EmptyCart />;
  }
  return (
    <div className={styles.cart_container}>
      <div className={styles.empty_cart_btn_box}>
        <div className={styles.empty_cart_btn} onClick={emptyCartHandler}>
          <RiDeleteBinLine className={styles.empty_cart_icon} />
          <span>Empty cart</span>
        </div>
      </div>
      <div className={styles.cart_list_box}>{cartList}</div>
      <div className={styles.cart_footer_box}>
        <div className={styles.info_box}>
          <div className={styles.total_items}>
            <h3>Items in cart:</h3>
            <h3>
              <span>{0} pcs.</span>
            </h3>
          </div>
          <div className={styles.total_price}>
            <h3>Total price:</h3>
            <h3>
              <span>{0} €.</span>
            </h3>
          </div>
        </div>
        <div className={styles.footer_btn_box}>
          <Link to={'/'} className={styles.back_to_main_link}>
            <div className={styles.back_home_btn}>
              <IoChevronBack className={styles.back_to_main_icon} />
              <span>Main</span>
            </div>
          </Link>
          <Link to={'/'} className={styles.pay_btn_link}>
            <div className={styles.pay_btn}>
              <MdEuroSymbol className={styles.pay_icon} />
              <span>Pay</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
