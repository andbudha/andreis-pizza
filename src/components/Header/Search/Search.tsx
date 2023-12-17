import styles from './Search.module.scss';
import { IoMdSearch, IoMdClose } from 'react-icons/io';
type Props = {};
export const Search = (props: Props) => {
  return (
    <div className={styles.search_container}>
      <div className={styles.search_box}>
        {' '}
        <IoMdSearch className={styles.search_icon} />
        <input className={styles.input_box} placeholder="Search pizza.." />
        <IoMdClose className={styles.remove_icon} />
      </div>
    </div>
  );
};
