// Components
import Link from 'next/link';
import { MarginBox } from '../components/margin-box/margin-box';
import { RecipeList } from '../components/recipe/list/recipe-list';

// Types
import { RecipeProps } from '../types/recipe';

// Utils
import { getAllRecipes } from '../lib/api';
import { Recipe } from '../components/recipe/recipe';

interface Props {
  recipes: RecipeProps[];
}

const Index = ({ recipes }: Props) => {
  const randomIndex = Math.floor(Math.random() * recipes.length);
  const randomRecipe = recipes.slice(randomIndex, 1)[0];

  return (
    <div className="home">
      <MarginBox bottom={1}>
        <h2>Maybe Make This?</h2>
      </MarginBox>
      <MarginBox bottom={3}>
        <Link href={`/recipes/${randomRecipe.slug}`}>
          <a>
            <Recipe>
              <Recipe.Header
                cookTime={randomRecipe.cookTime}
                description={randomRecipe.description}
                imgUrl={randomRecipe.imgUrl}
                notes={randomRecipe.notes}
                prepTime={randomRecipe.prepTime}
                servings={randomRecipe.servings}
                title={randomRecipe.title}
              />
            </Recipe>
          </a>
        </Link>
      </MarginBox>
      <MarginBox bottom={5}>
        <MarginBox bottom={1}>
          <h2>Recipes</h2>
        </MarginBox>
        <RecipeList allRecipes={recipes} />
      </MarginBox>
    </div>
  );
};

export default Index;

export const getStaticProps = async () => {
  const recipes = getAllRecipes();

  return {
    props: { recipes },
  };
};
