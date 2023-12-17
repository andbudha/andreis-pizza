import styles from './PizzaCard.module.scss';
import { BiCartAdd } from 'react-icons/bi';
import pizzaImage from '../../assets/images/pizzas/frutti_di_mari_main.png';
type Props = {};
export const PizzaCard = (props: Props) => {
  return (
    <div className={styles.pizza_card_container}>
      <div className={styles.pizza_img_box}>
        <img className={styles.pizza_img} src={pizzaImage} alt="pizza image" />
        <span className={styles.pizza_name}>{'Best Pizza'}</span>
      </div>
      <div className={styles.pizza_detail_box}>
        <div className={styles.pizza_crust_box}>
          <span className={styles.thin_crust}>{'thin-crust'}</span>
          <span className={styles.thick_crust}>{'thick-crust'}</span>
        </div>
        <div className={styles.pizza_size_box}>
          <span className={styles.lg_pizza}>{26} cm.</span>
          <span className={styles.md_pizza}>{30} cm.</span>
        </div>
      </div>
      <div className={styles.card_bottom_box}>
        <div className={styles.pizza_price}>{13}€.</div>
        <div className={styles.add_to_cart}>
          <BiCartAdd />
        </div>
      </div>
    </div>
  );
};
