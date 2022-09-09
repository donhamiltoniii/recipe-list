import { ReactNode } from 'react';
import styles from './styles.module.scss';

export type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => (
  <div className={styles.container}>{children}</div>
);
