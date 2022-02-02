// Components
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { Container } from '../../components/container/container';
import { Recipe } from '../../components/recipe/recipe';

// Utils
import { getRecipeBySlug, getAllRecipes } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';

type Props = {
  content: string;
  cookTime: string;
  description: string;
  prepTime: string;
  servings: string;
  slug: string;
  tags: string[];
  title: string;
};

const RecipePage = ({
  content,
  cookTime,
  description,
  prepTime,
  servings,
  slug,
  tags,
  title,
}: Props) => {
  const router = useRouter();
  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Container>
      <Recipe>
        <Recipe.Header
          cookTime={cookTime}
          description={description}
          prepTime={prepTime}
          servings={servings}
          title={title}
        />
        <Recipe.Body content={content} />
        <Recipe.Footer tags={tags} />
      </Recipe>
    </Container>
  );
};

export default RecipePage;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const recipe = getRecipeBySlug(params.slug, [
    'title',
    'prepTime',
    'cookTime',
    'servings',
    'description',
    'tags',
    'slug',
    'content',
  ]);

  const content = await markdownToHtml(recipe.content || '');

  return {
    props: {
      ...recipe,
      content,
    },
  };
}

export async function getStaticPaths() {
  const recipes = getAllRecipes(['slug']);

  return {
    paths: recipes.map((recipe) => {
      return {
        params: {
          slug: recipe.slug,
        },
      };
    }),
    fallback: false,
  };
}
