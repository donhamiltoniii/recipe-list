// Components
import { ReactNode } from 'react';

// Styles
import styles from './container.module.scss';

export type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => (
  <div className={styles.container}>{children}</div>
);
