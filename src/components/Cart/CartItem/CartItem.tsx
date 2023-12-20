import styles from './CartItem.module.scss';
import { GrSubtractCircle, GrAddCircle } from 'react-icons/gr';
import { RiDeleteBinLine } from 'react-icons/ri';

type CartItemProps = {};
export const CartItem = (props: CartItemProps) => {
  return (
    <div className={styles.cart_item_container}>
      <div className={styles.cart_item_box}>
        <div className={styles.cart_item_img_box}>
          <img
            className={styles.pizza_image}
            src={
              'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg'
            }
            alt="pizza image"
          />
        </div>
        <div className={styles.cart_item_detail_box}>
          <h3>Pizza Name</h3>
          <h4>pizza size / pizza crust / pizza price</h4>
        </div>
        <div className={styles.add_remove_cart_item_box}>
          <GrSubtractCircle className={styles.remove_cart_item_icon} />
          <div className={styles.cart_item_count}>{0}</div>
          <GrAddCircle
            className={`${styles.add_cart_item_icon} ${styles.active_add_cart_item_icon}`}
          />
        </div>
        <div className={styles.delete_cart_item_icon_box}>
          <RiDeleteBinLine className={styles.delete_cart_item_icon} />
        </div>
      </div>
    </div>
  );
};
