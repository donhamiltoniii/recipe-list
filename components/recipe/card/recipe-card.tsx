import Link from 'next/link'

interface Props {
  slug: string
  title: string
}

export const RecipeCard = ({ slug, title }: Props) => {
  return (
    <div>
      <h3>
        <Link href={`/recipes/${slug}`}>{title}</Link>
      </h3>
    </div>
  )
}
