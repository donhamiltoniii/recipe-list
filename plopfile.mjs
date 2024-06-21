export default function (plop) {
  plop.setGenerator('add-a-recipe', {
    description: 'this bootstraps a recipe file to the data directory',
    prompts: [
      {
        type: 'input',
        name: 'title',
        message: 'Title of the recipe you are adding.',
      },
      {
        type: 'input',
        name: 'prepTime',
        message: 'How long will it take to prep?',
      },
      {
        type: 'input',
        name: 'cookTime',
        message: 'How long will it take to cook?',
      },
      {
        type: 'input',
        name: 'servings',
        message: 'How many servings does it make?',
      },
      {
        type: 'input',
        name: 'cookTime',
        message: 'How long will it take to cook?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please give a short description of this dish',
      },
      {
        type: 'input',
        name: 'tags',
        message:
          'Please add a comma separated list of tags you would like associated with this recipe.',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'data/recipes/{{kebabCase title}}.mdx',
        templateFile: 'plop-templates/recipe.hbs',
      },
    ],
  });
}
