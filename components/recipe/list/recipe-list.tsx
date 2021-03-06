// Components
import { RecipeCard } from '../card/recipe-card';

// Types
import { RecipeProps } from '../../../types/recipe';

// Styles
import styles from './recipe-list.module.scss';

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
