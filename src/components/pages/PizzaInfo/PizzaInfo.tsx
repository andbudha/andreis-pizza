import { useParams } from 'react-router-dom';
import styles from './PizzaInfo.module.scss';
import { useSelector } from 'react-redux';
import { AppRootState } from '../../../redux/store';
import { Pizza } from '../../../assets/types/types';
type PizzaInfoProps = {};
export const PizzaInfo = (props: PizzaInfoProps) => {
  const pizzas = useSelector<AppRootState, Pizza[]>(
    (state) => state.pizzas.pizzas
  );
  const params = useParams();
  const { id } = params;

  console.log(id);

  const pizza = pizzas.find((pizza) => pizza.id === id);

  return (
    <div className={styles.pizza_info_container}>
      <div className={styles.pizza_img_box}>
        <img
          className={styles.pizza_img}
          src={pizza?.imageUrl}
          alt="pizza image"
        />
      </div>
      <div className={styles.pizza_detail_box}>
        <h3>{pizza?.name}</h3>
        <div className={styles.pizza_details}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            provident harum consequatur labore nobis voluptates similique? Quam,
            perferendis. Eveniet, maiores dignissimos! Voluptas dicta non
            dolorum quos itaque cupiditate excepturi sequi dolor, minus
            temporibus corrupti vitae. Repudiandae harum iusto esse nobis!
          </p>
        </div>
      </div>
    </div>
  );
};
