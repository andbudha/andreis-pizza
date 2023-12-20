import styles from './CartItem.module.scss';
import { GrSubtractCircle, GrAddCircle } from 'react-icons/gr';
import { RiDeleteBinLine } from 'react-icons/ri';
import { CartPizza } from '../../../assets/types/types';
import { useAppDispatch } from '../../../redux/store';
import { cartActions } from '../../../redux/slices/cartSlice';

type CartItemProps = {
  item: CartPizza;
};
export const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useAppDispatch();
  const removeItemHandler = () => {
    dispatch(cartActions.removePizza({ id: item.id }));
    console.log('removed', item.id);
  };
  return (
    <div className={styles.cart_item_container}>
      <div className={styles.cart_item_box}>
        <div className={styles.cart_item_img_box}>
          <img
            className={styles.pizza_image}
            src={item.imageUrl}
            alt="pizza image"
          />
        </div>
        <div className={styles.cart_item_detail_box}>
          <h3>{item.name}</h3>
          <h4>{`${item.size} cm. / ${item.crust} / ${item.price} €`}</h4>
        </div>
        <div className={styles.add_remove_cart_item_box}>
          <GrSubtractCircle className={styles.remove_cart_item_icon} />
          <div className={styles.cart_item_count}>{0}</div>
          <GrAddCircle
            className={`${styles.add_cart_item_icon} ${styles.active_add_cart_item_icon}`}
          />
        </div>
        <div className={styles.delete_cart_item_icon_box}>
          <RiDeleteBinLine
            className={styles.delete_cart_item_icon}
            onClick={removeItemHandler}
          />
        </div>
      </div>
    </div>
  );
};
