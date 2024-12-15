import { Anchor } from '../anchor';
import styles from './styles.module.scss';

export const Nav = () => (
  <nav className={styles['nav']}>
    <ul className={styles['nav__list']}>
      <li className={styles['nav__list-item']}>
        <Anchor href="/recipes">Recipes</Anchor>
      </li>
      <li className={styles['nav__list-item']}>
        <Anchor href="/tags">Tags</Anchor>
      </li>
    </ul>
  </nav>
);
