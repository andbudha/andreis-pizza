import { Link } from 'react-router-dom';
import styles from './CartInfo.module.scss';
import { BiCart } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { AppRootState, useAppDispatch } from '../../../redux/store';
import { CartPizza } from '../../../assets/types/types';
import { useEffect } from 'react';

export const CartInfo = () => {
  const dispatch = useAppDispatch();

  const cartItems = useSelector<AppRootState, CartPizza[]>(
    (state) => state.cart.cartItems
  );
  const cartItemAmount = useSelector<AppRootState, number>(
    (state) => state.cart.totalItemAmount
  );
  const totalCartPrice = useSelector<AppRootState, number>(
    (state) => state.cart.totalPrice
  );

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    console.log(cartItems.length);
  }, [cartItems]);

  return (
    <Link to={'/cart'} className={styles.link}>
      <>
        <div className={styles.cartinfo_container}>
          <div className={styles.item_amount_box}>
            <BiCart className={styles.cart_icon} color="white" />
            <div className={styles.item_amount}>{cartItemAmount}</div>
          </div>
          <div className={styles.separation_box}></div>
          <div className={styles.total_price_box}>{totalCartPrice} €</div>
        </div>
      </>
    </Link>
  );
};
