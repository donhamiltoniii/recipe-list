import { Container } from '@/components/container';
import { MarginBox } from '@/components/margin-box';
import { Recipe } from '@/components/recipe';
import { getRecipeBySlug } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';

type Props = {
  content: string;
  cookTime: string;
  description: string;
  imgUrl: string;
  notes: string;
  prepTime: string;
  servings: string;
  slug: string;
  tags: string[];
  title: string;
};

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const {
    content,
    cookTime,
    description,
    imgUrl,
    notes,
    prepTime,
    servings,
    tags,
    title,
  }: Props = getRecipeBySlug((await params).slug);
  const markdown = await markdownToHtml(content);

  return (
    <Container>
      <MarginBox bottom={5}>
        <Recipe>
          <Recipe.Header
            cookTime={cookTime}
            description={description}
            imgUrl={imgUrl}
            notes={notes}
            prepTime={prepTime}
            servings={servings}
            title={title}
          />
          <Recipe.Body content={markdown} />
          <Recipe.Footer tags={tags} />
        </Recipe>
      </MarginBox>
    </Container>
  );
}
