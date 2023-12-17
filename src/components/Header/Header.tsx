// @flow
import { CartInfo } from './CartInfo/CartInfo';
import styles from './Header.module.scss';
import { Logo } from './Logo/Logo';
import { Search } from './Search/Search';

type Props = {};
export const Header = (props: Props) => {
  return (
    <div className={styles.header_container}>
      <Logo />
      <Search />
      <CartInfo />
    </div>
  );
};
