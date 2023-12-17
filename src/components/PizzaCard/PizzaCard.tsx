import styles from './PizzaCard.module.scss';
import { BiCartAdd } from 'react-icons/bi';
import pizzaImage from '../../assets/images/pizzas/frutti_di_mari_main.png';
type Props = {};
export const PizzaCard = (props: Props) => {
  return (
    <div className={styles.pizza_card_container}>
      <div className={styles.pizza_img_box}>
        <img className={styles.pizza_img} src={pizzaImage} alt="pizza image" />
        <div className={styles.pizza_name}>{'Best Pizza'}</div>
      </div>
      <div className={styles.pizza_detail_box}>
        <div className={styles.pizza_crust_box}>
          <div className={`${styles.crust_box} ${styles.selected}`}>
            {'thin-crust'}
          </div>
          <div className={styles.crust_box}>{'thick-crust'}</div>
        </div>
        <div className={styles.pizza_size_box}>
          <div className={styles.size_box}>{26} cm.</div>
          <div className={styles.size_box}>{30} cm.</div>
        </div>
      </div>
      <div className={styles.card_bottom_box}>
        <div className={styles.pizza_price}>{13} €.</div>
        <div className={styles.add_to_cart_btn}>
          <BiCartAdd className={styles.add_to_cart_icon} />
          <div className={styles.added_items}>{2}</div>
        </div>
      </div>
    </div>
  );
};
