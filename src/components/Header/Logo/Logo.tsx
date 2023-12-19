// @flow
import styles from './Logo.module.scss';
import logo from '../../../assets/images/logo/pizza_logo2_no_bg.png';
import { Link } from 'react-router-dom';
type Props = {};
export const Logo = (props: Props) => {
  return (
    <Link to="/">
      <div className={styles.logo_container}>
        <img className={styles.logo} src={logo} alt="pizza logo image" />
      </div>
    </Link>
  );
};
