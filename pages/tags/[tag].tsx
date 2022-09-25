import { useRouter } from 'next/router';
import { Container } from '../../components/container';
import { MarginBox } from '../../components/margin-box';
import { RecipeCard } from '../../components/recipe/card';
import { getAllRecipes, getRecipesByTag } from '../../lib/api';
import { RecipeProps } from '../../types';

interface Props {
  taggedRecipes: RecipeProps[];
}

const TagPage = ({ taggedRecipes }: Props) => {
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
};

type Params = {
  params: {
    tag: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const { tag } = params;
  const taggedRecipes: RecipeProps[] = getRecipesByTag(tag);

  return {
    props: {
      taggedRecipes,
    },
  };
}

export async function getStaticPaths() {
  const recipes = getAllRecipes();

  return {
    paths: Array.from(recipes.map((recipe) => recipe.tags).flat()).map(
      (tag: string) => ({
        params: {
          tag,
        },
      })
    ),
    fallback: false,
  };
}

export default TagPage;
