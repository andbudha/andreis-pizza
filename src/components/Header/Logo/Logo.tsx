import styles from './Logo.module.scss';
import logo from '../../../assets/images/logo/logo.png';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/">
      <div className={styles.logo_container}>
        <img className={styles.logo} src={logo} alt="pizza logo image" />
      </div>
    </Link>
  );
};
