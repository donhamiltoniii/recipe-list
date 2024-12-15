'use server';
import { Anchor } from '@/components/anchor';
import { MarginBox } from '@/components/margin-box';
import { Recipe } from '@/components/recipe';
import { RecipeList } from '@/components/recipe/list';
import { getAllRecipes } from '@/lib/api';

export default async function Index() {
  const recipes = await getAllRecipes();
  const randomIndex = Math.floor(Math.random() * recipes.length);
  const randomRecipe = recipes.slice(randomIndex, randomIndex + 1)[0];

  return (
    <main className="home">
      <MarginBox bottom={1}>
        <h2>Maybe Make This?</h2>
      </MarginBox>
      <MarginBox bottom={3}>
        {randomRecipe && (
          <Anchor href={`/recipes/${randomRecipe.slug}`}>
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
          </Anchor>
        )}
      </MarginBox>
      <MarginBox bottom={5}>
        <MarginBox bottom={1}>
          <h2>Recipes</h2>
        </MarginBox>
        <RecipeList allRecipes={recipes} />
      </MarginBox>
    </main>
  );
}
