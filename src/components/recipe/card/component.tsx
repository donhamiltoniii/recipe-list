import { Anchor } from '@/components/anchor';
import { decodeHtml } from '../../../lib/decodeHtml';
import styles from './styles.module.scss';
import cls from 'classnames';
import { Permanent_Marker } from 'next/font/google';

const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
});

interface Props {
  slug: string;
  title: string;
}

export const RecipeCard = ({ slug, title }: Props) => {
  return (
    <div className={cls(styles['recipe-card'], permanentMarker.className)}>
      <Anchor href={`/recipes/${slug}`}>
        <h3>{decodeHtml(title)}</h3>
      </Anchor>
    </div>
  );
};
