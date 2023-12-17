// @flow
import styles from './Logo.module.scss';
import logo from '../../../assets/images/logo/pizza_logo2_no_bg.png';
type Props = {};
export const Logo = (props: Props) => {
  return (
    <div className={styles.logo_container}>
      <img className={styles.logo} src={logo} alt="pizza logo image" />
    </div>
  );
};
