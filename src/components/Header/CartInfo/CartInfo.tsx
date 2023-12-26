import { Link } from 'react-router-dom';
import styles from './CartInfo.module.scss';
import { BiCart } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { AppRootState } from '../../../redux/store';
import { CartPizza } from '../../../assets/types/types';
import { useEffect, useState } from 'react';
import { getLocalStorageItems } from '../../../assets/localSorageItems/localStorageItems';
type Props = {};
export const CartInfo = (props: Props) => {
  const [localStorageTotalPrice, setLocalStorageTotalPrice] = useState(0);
  const [localStorageItemAmount, setLocalStorageItemAmount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const cartItems = useSelector<AppRootState, CartPizza[]>(
    (state) => state.cart.cartItems
  );
  const cartItemAmount = useSelector<AppRootState, number>(
    (state) => state.cart.totalItemAmount
  );

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
    setIsMounted(true);

    const totalPriceFromLS = getLocalStorageItems().reduce(
      (amount: number, item: CartPizza) =>
        item.count ? amount + item.count * item.price : 0,
      0
    );

    const itemAmountFromLocalStorage = getLocalStorageItems().reduce(
      (amount: number, item: CartPizza) =>
        item.count ? amount + item.count : 0,
      0
    );

    setLocalStorageTotalPrice(totalPriceFromLS);
    setLocalStorageItemAmount(itemAmountFromLocalStorage);
  }, [cartItems, cartItemAmount]);

  return (
    <Link to={'/cart'} className={styles.link}>
      <>
        <div className={styles.cartinfo_container}>
          <div className={styles.item_amount_box}>
            <BiCart className={styles.cart_icon} color="white" />
            <div className={styles.item_amount}>{localStorageItemAmount}</div>
          </div>
          <div className={styles.separation_box}></div>
          <div className={styles.total_price_box}>
            {localStorageTotalPrice}€
          </div>
        </div>
      </>
    </Link>
  );
};
