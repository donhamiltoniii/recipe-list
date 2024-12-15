import { Container } from '@/components/container';
import { MarginBox } from '@/components/margin-box';
import { getAllRecipes } from '@/lib/api';
import { RecipeProps } from '@/types';
import Link from 'next/link';

export default async function TagPage() {
  const recipes = await getAllRecipes();

  const tags = Array.from(
    new Set(
      recipes
        .map((recipe: RecipeProps) => recipe.tags)
        .flat()
        .sort()
    )
  );

  return (
    <Container>
      <MarginBox bottom={5}>
        <ul>
          {tags.map((tag: string) => (
            <li key={tag}>
              <Link href={`/tags/${tag}`}>{tag}</Link>
            </li>
          ))}
        </ul>
      </MarginBox>
    </Container>
  );
}
