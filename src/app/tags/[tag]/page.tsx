import { Container } from '@/components/container';
import { MarginBox } from '@/components/margin-box';
import { RecipeCard } from '@/components/recipe/card';
import { getRecipesByTag } from '@/lib/api';
import { RecipeProps } from '@/types';

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const taggedRecipes: RecipeProps[] = await getRecipesByTag(
    (
      await params
    ).tag
  );

  return (
    <Container>
      <MarginBox bottom={5}>
        {taggedRecipes.map((recipe: RecipeProps) => (
          <RecipeCard
            key={recipe.slug}
            slug={recipe.slug}
            title={recipe.title}
          />
        ))}
      </MarginBox>
    </Container>
  );
}
