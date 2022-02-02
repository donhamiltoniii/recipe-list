export type RecipeProps = {
  content: string;
  cookTime: string;
  description: string;
  prepTime: string;
  servings: string;
  slug: string;
  tags: string[];
  title: string;
};

export type RecipeCardProps = {
  title: string;
  slug: string;
};
