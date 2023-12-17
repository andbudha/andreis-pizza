// @flow
import styles from './Header.module.scss';
import * as React from 'react';
import { Logo } from './Logo/Logo';

type Props = {};
export const Header = (props: Props) => {
  return (
    <div className={styles.header_container}>
      <Logo />
      <div className={styles.search_container}></div>
      <div className={styles.cart_info_container}></div>
    </div>
  );
};
