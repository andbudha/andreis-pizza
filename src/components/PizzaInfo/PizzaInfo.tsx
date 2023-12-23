import { useParams } from 'react-router-dom';
import styles from './PizzaInfo.module.scss';
import { useSelector } from 'react-redux';
import { AppRootState } from '../../redux/store';
import { Pizza } from '../../assets/types/types';
type PizzaInfoProps = {};
export const PizzaInfo = (props: PizzaInfoProps) => {
  const pizzas = useSelector<AppRootState, Pizza[]>(
    (state) => state.pizzas.pizzas
  );
  const params = useParams();
  const { id } = params;

  console.log(id);

  const pizzaImage = pizzas.find((pizza) => pizza.id === id)?.imageUrl;
  console.log(pizzaImage);
  return (
    <div className={styles.pizza_info_container}>
      <h1>Pizza Info</h1>
      <img src={pizzaImage} alt="" />
    </div>
  );
};
