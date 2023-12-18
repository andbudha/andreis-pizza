import styles from './FilterButton.module.scss';
type FilterButtonProps = {
  type: string;
  activeType: string;
  setActiveType: (type: string) => void;
};
export const FilterButton = ({
  type,
  activeType,
  setActiveType,
}: FilterButtonProps) => {
  return (
    <div
      className={`${styles.filter_btn} ${
        activeType === type ? styles.selected : ''
      }`}
      onClick={() => setActiveType(type)}
    >
      {type}
    </div>
  );
};
