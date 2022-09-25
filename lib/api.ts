import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { RecipeProps } from '../types';

const recipesDirectory = join(process.cwd(), 'data', 'recipes');

export function getAllRecipes(): RecipeProps[] {
  const slugs = getRecipeSlugs();
  const recipes = slugs.map((slug) => getRecipeBySlug(slug));
  return recipes;
}

export function getRecipeBySlug(slug: string): RecipeProps {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(recipesDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    ...data,
    content,
    imgUrl: data.imgUrl ?? 'https://www.fillmurray.com/300/200',
    slug: realSlug,
  } as RecipeProps;
}

export function getRecipeSlugs() {
  return fs.readdirSync(recipesDirectory);
}

export function getRecipesByTag(tag: string) {
  return getAllRecipes().filter((recipe: RecipeProps) =>
    recipe.tags.includes(tag)
  );
}
