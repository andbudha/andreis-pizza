// @flow
import { CartInfo } from './CartInfo/CartInfo';
import styles from './Header.module.scss';
import { Logo } from './Logo/Logo';

type Props = {};
export const Header = (props: Props) => {
  return (
    <div className={styles.header_container}>
      <Logo />
      <div className={styles.search_container}>Search</div>
      <CartInfo />
    </div>
  );
};
