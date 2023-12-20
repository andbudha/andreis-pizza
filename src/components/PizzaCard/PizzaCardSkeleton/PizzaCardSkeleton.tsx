import ContentLoader, { IContentLoaderProps } from 'react-content-loader';
import { JSX } from 'react/jsx-runtime';
import styles from './PizzaCardSkeleton.module.scss';

export const PizzaCardSkeleton = (
  props: JSX.IntrinsicAttributes & IContentLoaderProps
) => (
  <ContentLoader
    className={styles.skeleton_container}
    speed={2}
    width={290}
    height={425}
    viewBox="0 0 290 425"
    backgroundColor="#f6f4f4"
    foregroundColor="#e8edeb"
    {...props}
  >
    <circle cx="137" cy="128" r="113" />
    <rect x="74" y="262" rx="5" ry="5" width="135" height="21" />
    <rect x="18" y="291" rx="13" ry="13" width="248" height="80" />
    <rect x="189" y="387" rx="19" ry="19" width="73" height="36" />
    <rect x="235" y="406" rx="0" ry="0" width="1" height="1" />
    <rect x="228" y="395" rx="0" ry="0" width="2" height="1" />
    <rect x="228" y="403" rx="0" ry="0" width="5" height="4" />
    <rect x="23" y="394" rx="5" ry="5" width="44" height="21" />
  </ContentLoader>
);
