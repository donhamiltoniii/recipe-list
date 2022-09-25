import Link from 'next/link';
import { Nav } from '../navigation';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1 className={styles.header__title}>Dondon&apos;s Recipes</h1>
      </Link>
      <Nav />
    </header>
  );
};
