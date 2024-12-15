'use server';
import { MarginBox } from '@/components/margin-box';
import { RecipeList } from '@/components/recipe/list';
import { getAllRecipes } from '@/lib/api';

export default async function Index() {
  const recipes = await getAllRecipes();

  return (
    <main className="home">
      <MarginBox bottom={5}>
        <MarginBox bottom={1}>
          <h2>Recipes</h2>
        </MarginBox>
        <RecipeList allRecipes={recipes} />
      </MarginBox>
    </main>
  );
}
