import Link from 'next/link';
import { Container } from '../../components/container';
import { MarginBox } from '../../components/margin-box';
import { getAllRecipes } from '../../lib/api';
import { RecipeProps } from '../../types';

interface TagProps {
  tags: string[];
}

const TagPage = ({ tags }: TagProps) => {
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
};

export async function getStaticProps() {
  const recipes = getAllRecipes();

  const tags = Array.from(
    new Set(
      recipes
        .map((recipe: RecipeProps) => recipe.tags)
        .flat()
        .sort()
    )
  );

  return {
    props: {
      tags,
    },
  };
}

export default TagPage;
