import styles from './PizzaInfo.module.scss';
type PizzaInfoProps = {};
export const PizzaInfo = (props: PizzaInfoProps) => {
  return (
    <div className={styles.pizza_info_container}>
      <h1>Pizza Info</h1>
    </div>
  );
};
