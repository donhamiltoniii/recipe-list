import { RecipeProps } from '../../../types';
import { RecipeCard } from '../card';
import styles from './styles.module.scss';

interface RecipeListProps {
  allRecipes: RecipeProps[];
}

export const RecipeList = ({ allRecipes }: RecipeListProps) => {
  return (
    <ul className={styles['recipe-list']}>
      {allRecipes.map(({ slug, title }: RecipeProps) => (
        <li className={styles['recipe-list__item']} key={slug}>
          <RecipeCard slug={slug} title={title} />
        </li>
      ))}
    </ul>
  );
};
