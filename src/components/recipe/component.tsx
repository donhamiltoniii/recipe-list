import cls from 'classnames';
import { Permanent_Marker } from 'next/font/google';
import Link from 'next/link';
import { ReactNode } from 'react';
import { decodeHtml } from '../../lib/decodeHtml';
import { MarginBox } from '../margin-box';
import styles from './styles.module.scss';

const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
});

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
        <li key={tag}>
          <Link href={`/tags/${tag}`}>{tag}</Link>
        </li>
      ))}
    </ul>
  </footer>
);

type HeaderProps = {
  cookTime: string;
  description: string;
  imgUrl: string;
  notes: string;
  prepTime: string;
  servings: string;
  title: string;
};

const Header = ({
  cookTime,
  description,
  imgUrl,
  notes,
  prepTime,
  servings,
  title,
}: HeaderProps) => {
  return (
    <header className={cls(styles['recipe__header'])}>
      {imgUrl ? (
        <div className={styles['recipe__img']}>
          <img alt={title} src={imgUrl} style={{ width: '100%' }} />
        </div>
      ) : null}
      <div>
        <h2 className={cls(styles['recipe__title'], permanentMarker.className)}>
          {decodeHtml(title)}
        </h2>
        <section className={styles['recipe__times']}>
          <small className={styles['recipe__prep-time']}>
            Prep time: {prepTime}
          </small>
          <small className={styles['recipe__cook-time']}>
            Cook time: {cookTime}
          </small>
        </section>
        <small className={styles['recipe__servings']}>
          Servings: {servings}
        </small>
        <blockquote className={styles['recipe__description']}>
          {decodeHtml(description)}
        </blockquote>
        {notes && (
          <MarginBox bottom={1} top={1}>
            <p className={styles['recipe__notes']}>
              <strong>NOTES: </strong>
              {notes}
            </p>
          </MarginBox>
        )}
      </div>
    </header>
  );
};

type RecipeProps = {
  children: ReactNode;
};

export const Recipe = ({ children }: RecipeProps) => (
  <div className={cls(styles['recipe'])}>{children}</div>
);

Recipe.Body = Body;
Recipe.Footer = Footer;
Recipe.Header = Header;
