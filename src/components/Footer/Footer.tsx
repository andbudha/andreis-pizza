import { useSelector } from 'react-redux';
import { AppRootState } from '../../redux/store';
import styles from './Footer.module.scss';
import { Paginator } from '../Paginator/Paginator';
import { Pizza } from '../../assets/types/types';

type FooterProps = {
  pizzas: Pizza[];
};
export const Footer = ({ pizzas }: FooterProps) => {
  const cartItemAmount = useSelector<AppRootState, number>(
    (state) => state.cart.totalItemAmount
  );
  const totalPrice = useSelector<AppRootState, number>(
    (state) => state.cart.totalPrice
  );
  return (
    <div className={styles.footer_container}>
      <div className={styles.pagination_box}>
        <Paginator />
      </div>
    </div>
  );
};
