// Components
import { ReactNode } from 'react';

// Style
import styles from './recipe.module.scss';

type BodyProps = {
  content: string;
};

const Body = ({ content }: BodyProps) => {
  return (
    <div
      className={styles['__body']}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

type FooterProps = {
  tags: string[];
};

const Footer = ({ tags }: FooterProps) => (
  <footer className={styles['__footer']}>
    <ul>
      {tags.map((tag: string) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  </footer>
);

type HeaderProps = {
  cookTime: string;
  description: string;
  prepTime: string;
  servings: string;
  title: string;
};

const Header = ({
  cookTime,
  description,
  prepTime,
  servings,
  title,
}: HeaderProps) => {
  return (
    <div className={styles['__header']}>
      <h2 className={styles['__title']}>{title}</h2>
      <section className={styles['__times']}>
        <small className={styles['__prep-time']}>Prep time: {prepTime}</small>
        <small className={styles['__cook-time']}>Cook time: {cookTime}</small>
      </section>
      <small className={styles['__servings']}>Servings: {servings}</small>
      <blockquote className={styles['__description']}>{description}</blockquote>
    </div>
  );
};

type RecipeProps = {
  children: ReactNode;
};

export const Recipe = ({ children }: RecipeProps) => (
  <div className={styles['recipe']}>{children}</div>
);

Recipe.Body = Body;
Recipe.Footer = Footer;
Recipe.Header = Header;
