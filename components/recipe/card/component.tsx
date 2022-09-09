import Link from 'next/link';
import styles from './styles.module.scss';

interface Props {
  slug: string;
  title: string;
}

export const RecipeCard = ({ slug, title }: Props) => {
  return (
    <div className={styles['recipe-card']}>
      <Link href={`/recipes/${slug}`}>
        <h3>{title}</h3>
      </Link>
    </div>
  );
};
