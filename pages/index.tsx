import { useEffect, useState } from 'react';
import { Anchor } from '../components/anchor';
import { MarginBox } from '../components/margin-box';
import { Recipe } from '../components/recipe';
import { RecipeList } from '../components/recipe/list';
import useWindowSize from '../hooks/use-window-size';
import { getAllRecipes } from '../lib/api';
import { RecipeProps } from '../types';

interface Props {
  recipes: RecipeProps[];
}

const Index = ({ recipes }: Props) => {
  const [randomRecipe, setRandomRecipe] = useState<RecipeProps>();
  const [small, setSmall] = useState<boolean>(false);

  const { width } = useWindowSize();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const recipe = recipes.slice(randomIndex, randomIndex + 1)[0];
    setRandomRecipe(recipe);
  }, []);

  useEffect(() => {
    if (width && width >= 600) {
      setSmall(false);
    } else {
      setSmall(true);
    }
  }, [width]);

  return (
    <div className="home">
      <MarginBox bottom={1}>
        <h2>Maybe Make This?</h2>
      </MarginBox>
      <MarginBox bottom={3}>
        {randomRecipe && (
          <Anchor href={`/recipes/${randomRecipe.slug}`}>
            <Recipe small={small}>
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
          </Anchor>
        )}
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
