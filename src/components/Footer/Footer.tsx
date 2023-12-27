import styles from './Footer.module.scss';
import { Paginator } from '../Paginator/Paginator';

export const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.pagination_box}>
        <Paginator />
      </div>
    </div>
  );
};
