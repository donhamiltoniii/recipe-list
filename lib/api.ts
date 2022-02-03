import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { RecipeCardProps, RecipeProps } from '../types/recipe';

const recipesDirectory = join(process.cwd(), 'data', 'recipes');

export function getRecipeSlugs() {
  return fs.readdirSync(recipesDirectory);
}

export function getRecipeBySlug(
  slug: string,
  fields: string[] = []
): { [key: string]: string | null } {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(recipesDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const recipe: { [key: string]: string | null } = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      recipe[field] = realSlug;
    } else if (field === 'content') {
      recipe[field] = content;
    } else {
      recipe[field] = data[field];
    }

    if (data[field] === undefined && field !== 'slug' && field !== 'content') {
      recipe[field] = null;
    }
  });

  return recipe;
}

export function getAllRecipes(
  fields: string[] = []
): RecipeProps[] | RecipeCardProps[] {
  const slugs = getRecipeSlugs();
  const recipes = slugs.map((slug) => getRecipeBySlug(slug, fields));
  return recipes as RecipeProps[] | RecipeCardProps[];
}
