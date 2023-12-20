import styles from './PizzaCard.module.scss';
import { BiCartAdd } from 'react-icons/bi';
import { useState } from 'react';
import { AppRootState, useAppDispatch } from '../../redux/store';
import { cartActions } from '../../redux/cartSlice';
import { CartPizza } from '../../assets/types/types';
import { useSelector } from 'react-redux';

type PizzaCardProps = {
  category: number;
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  rating: number;
  sizes: number[];
  types: number[];
};
export const PizzaCard = ({
  category,
  id,
  imageUrl,
  name,
  price,
  rating,
  sizes,
  types,
}: PizzaCardProps) => {
  const dispatch = useAppDispatch();
  const cartItems = useSelector<AppRootState>((state) => state.cart.cartItems);

  const crustTypes = ['thin-crust', 'thick-crust'];
  const [selectedCrust, setSelectedCrust] = useState(0);
  const [selectedSize, setSelectedSize] = useState(26);
  const crustType = selectedCrust === 0 ? 'thin-crust' : 'thick-crust';

  console.log(cartItems);

  const addPizzaToCartHandler = () => {
    const addedPizza: CartPizza = {
      id,
      imageUrl,
      name,
      price,
      crust: crustType,
      size: selectedSize,
    };
    dispatch(cartActions.addPizza({ addedPizza }));
  };
  return (
    <div className={styles.pizza_card_container}>
      <div className={styles.pizza_img_box}>
        <img className={styles.pizza_img} src={imageUrl} alt="pizza image" />
        <div className={styles.pizza_name}>{name}</div>
      </div>
      <div className={styles.pizza_detail_box}>
        <div className={styles.pizza_crust_box}>
          <div
            onClick={() => setSelectedCrust(types[0])}
            className={`${styles.thin_crust_btn} ${
              selectedCrust === types[0] ? styles.selected : ''
            }`}
          >
            {crustTypes[types[0]]}
          </div>
          <div
            onClick={() => setSelectedCrust(types[1])}
            className={`${styles.thick_crust_btn} ${
              selectedCrust === types[1] ? styles.selected : ''
            }`}
          >
            {crustTypes[types[1]]}
          </div>
        </div>
        <div className={styles.pizza_size_box}>
          <div
            onClick={() => setSelectedSize(sizes[0])}
            className={`${styles.small_pizza_size_btn} ${
              selectedSize === sizes[0] ? styles.selected : null
            }`}
          >
            {sizes[0]} cm.
          </div>
          <div
            onClick={() => setSelectedSize(sizes[1])}
            className={`${styles.big_pizza_size_btn} ${
              selectedSize === sizes[1] ? styles.selected : null
            }`}
          >
            {sizes[1]} cm.
          </div>
        </div>
      </div>
      <div className={styles.card_bottom_box}>
        <div className={styles.pizza_price}>{price} €.</div>
        <div className={styles.add_to_cart_btn} onClick={addPizzaToCartHandler}>
          <BiCartAdd className={styles.add_to_cart_icon} />
          <div className={styles.added_items}>{0}</div>
        </div>
      </div>
    </div>
  );
};
