// Components
import { RecipeCard } from '../components/recipe/card/recipe-card';

// Types
import { RecipeCardProps } from '../types/recipe';

// Utils
import { getAllRecipes } from '../lib/api';

interface Props {
  allRecipes: RecipeCardProps[];
}

const Index = ({ allRecipes }: Props) => {
  return allRecipes.map((recipe: RecipeCardProps) => (
    <RecipeCard key={recipe.slug} title={recipe.title} slug={recipe.slug} />
  ));
};

export default Index;

export const getStaticProps = async () => {
  const allRecipes = getAllRecipes(['slug', 'title']);
  console.log({ allRecipes });

  return {
    props: { allRecipes },
  };
};
