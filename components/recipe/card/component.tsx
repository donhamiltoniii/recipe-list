import Link from 'next/link';
import { decodeHtml } from '../../../lib/decodeHtml';
import styles from './styles.module.scss';

interface Props {
  slug: string;
  title: string;
}

export const RecipeCard = ({ slug, title }: Props) => {
  return (
    <div className={styles['recipe-card']}>
      <Link href={`/recipes/${slug}`}>
        <h3>{decodeHtml(title)}</h3>
      </Link>
    </div>
  );
};
