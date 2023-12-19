import styles from './Cart.module.scss';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdEuroSymbol } from 'react-icons/md';
import { IoChevronBack } from 'react-icons/io5';
type CartProps = {};
export const Cart = (props: CartProps) => {
  return (
    <div className={styles.cart_container}>
      <div className={styles.empty_cart_btn_box}>
        <div className={styles.empty_cart_btn}>
          <RiDeleteBinLine className={styles.empty_cart_icon} />
          <span>Empty cart</span>
        </div>
      </div>
      <div className={styles.cart_list_box}>{'Cart List'}</div>
      <div className={styles.cart_footer_box}>
        <div className={styles.info_box}>
          <div className={styles.total_items}>
            <h3>Items in cart:</h3>
            <h3>
              <span>{0} pcs.</span>
            </h3>
          </div>
          <div className={styles.total_price}>
            <h3>Total sum:</h3>
            <h3>
              <span>{0} €.</span>
            </h3>
          </div>
        </div>
        <div className={styles.footer_btn_box}>
          <div className={styles.back_home_btn}>
            <IoChevronBack className={styles.back_to_main_icon} />
            <span>Main</span>
          </div>

          <div className={styles.pay_btn}>
            <MdEuroSymbol className={styles.pay_icon} />
            <span>Pay</span>
          </div>
        </div>
      </div>
    </div>
  );
};
