// Components
import { ReactNode } from 'react';
import { MarginBox } from '../margin-box/margin-box';

// Style
import styles from './recipe.module.scss';

type BodyProps = {
  content: string;
};

const Body = ({ content }: BodyProps) => {
  return (
    <div className={styles['recipe__body']}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

type FooterProps = {
  tags: string[];
};

const Footer = ({ tags }: FooterProps) => (
  <footer className={styles['recipe__footer']}>
    <h4 className={styles['recipe__tags-title']}>Tags</h4>
    <ul className={styles['recipe__tags-list']}>
      {tags.map((tag: string) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  </footer>
);

type HeaderProps = {
  cookTime: string;
  description: string;
  notes: string;
  prepTime: string;
  servings: string;
  title: string;
};

const Header = ({
  cookTime,
  description,
  notes,
  prepTime,
  servings,
  title,
}: HeaderProps) => {
  return (
    <header className={styles['recipe__header']}>
      <h2 className={styles['recipe__title']}>{title}</h2>
      <section className={styles['recipe__times']}>
        <small className={styles['recipe__prep-time']}>
          Prep time: {prepTime}
        </small>
        <small className={styles['recipe__cook-time']}>
          Cook time: {cookTime}
        </small>
      </section>
      <small className={styles['recipe__servings']}>Servings: {servings}</small>
      <blockquote className={styles['recipe__description']}>
        {description}
      </blockquote>
      {notes && (
        <MarginBox bottom={1} top={1}>
          <p className={styles['recipe__notes']}>
            <strong>NOTES: </strong>
            {notes}
          </p>
        </MarginBox>
      )}
    </header>
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
