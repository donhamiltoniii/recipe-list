// Components
import { RecipeCard } from '../card/recipe-card';

// Types
import { RecipeCardProps } from '../../../types/recipe';

// Styles
import styles from './recipe-list.module.scss';

interface RecipeListProps {
  allRecipes: RecipeCardProps[];
}

export const RecipeList = ({ allRecipes }: RecipeListProps) => {
  return (
    <ul className={styles['recipe-list']}>
      {allRecipes.map(({ slug, title }: RecipeCardProps) => (
        <li className={styles['recipe-list__item']} key={slug}>
          <RecipeCard slug={slug} title={title} />
        </li>
      ))}
    </ul>
  );
};
