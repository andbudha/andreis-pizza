import { Header } from '../Header/Header';
import { PizzaCard } from '../PizzaCard/PizzaCard';
import styles from './Home.module.scss';

type Props = {};
export const Home = (props: Props) => {
  return (
    <div className={styles.home_container}>
      <Header />
      <PizzaCard />
    </div>
  );
};
