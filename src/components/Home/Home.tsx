import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { PizzaCard } from '../PizzaCard/PizzaCard';
import styles from './Home.module.scss';

type Props = {};
export const Home = (props: Props) => {
  return (
    <div className={styles.home_container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.filter}></div>
      <div className={styles.pizza_grid_box}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
