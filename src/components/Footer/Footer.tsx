import styles from './Footer.module.scss';

type Props = {};
export const Footer = (props: Props) => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.info_box}>
        <div className={styles.total_price}>
          <h3>Total sum:</h3>
          <h3>
            <span>{38.5} €.</span>
          </h3>
        </div>
        <div className={styles.total_items}>
          <h3>Items in cart:</h3>
          <h3>
            <span>{3} pcs.</span>
          </h3>
        </div>
      </div>
      <div className={styles.pagination_box}>
        <h3>...123...</h3>
      </div>
    </div>
  );
};
