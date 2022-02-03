// Components
import { RecipeList } from '../components/recipe/list/recipe-list';

// Types
import { RecipeCardProps } from '../types/recipe';

// Utils
import { getAllRecipes } from '../lib/api';

interface Props {
  allRecipes: RecipeCardProps[];
}

const Index = ({ allRecipes }: Props) => {
  return (
    <div className="home">
      <RecipeList allRecipes={allRecipes} />
    </div>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allRecipes = getAllRecipes(['slug', 'title']);

  return {
    props: { allRecipes },
  };
};
