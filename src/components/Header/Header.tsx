import { useLocation } from 'react-router-dom';
import { CartInfo } from './CartInfo/CartInfo';
import styles from './Header.module.scss';
import { Logo } from './Logo/Logo';
import { Search } from './Search/Search';

export const Header = () => {
  return (
    <div className={styles.header_container}>
      <Logo />
      {useLocation().pathname !== '/cart' && <Search />}
      <CartInfo />
    </div>
  );
};
