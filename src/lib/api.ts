import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import { RecipeProps } from '../types';

const recipesDirectory = join(process.cwd(), 'src', 'data', 'recipes');

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
    slug: realSlug,
  } as RecipeProps;
}

export function getRecipeSlugs() {
  return fs.readdirSync(recipesDirectory);
}

export function getRecipesByTag(tag: string) {
  const decodedTag = decodeURIComponent(tag);

  return getAllRecipes().filter((recipe: RecipeProps) =>
    recipe.tags.includes(decodedTag)
  );
}
