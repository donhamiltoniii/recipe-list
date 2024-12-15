import classNames from 'classnames';
import { Permanent_Marker } from 'next/font/google';
import { Anchor } from '@/components/anchor';
import { Nav } from '@/components/navigation';

import styles from './styles.module.scss';

const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
});

const className = classNames(
  styles['header__title'],
  permanentMarker.className
);

export const Header = () => {
  return (
    <header className={styles['header']}>
      <Anchor href="/">
        <h1 className={className}>Dondon&apos;s Recipes</h1>
      </Anchor>
      <Nav />
    </header>
  );
};
