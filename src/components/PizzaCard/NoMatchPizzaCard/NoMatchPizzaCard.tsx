import styles from './NoMatchPizzaCard.module.scss';
import noMatchImage from '../../../assets/images/no_match.png';
export const NoMatchPizzaCard = () => {
  return (
    <div className={styles.no_match_card_container}>
      <div className={styles.no_match_box}>
        <div className={styles.no_match_text_box}>
          <h3>Sorry, </h3>
          <h3>no match found on this page</h3>
        </div>

        <img src={noMatchImage} alt="pizza slice image" />
      </div>
    </div>
  );
};
