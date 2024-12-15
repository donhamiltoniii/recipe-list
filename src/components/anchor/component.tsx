import Link from 'next/link';
import classNames from 'classnames';
import css from './styles.module.scss';

type LinkProps = {
  children: React.ReactNode;
  href: string;
  underline?: boolean;
};

export const Anchor = ({ children, href, underline = false }: LinkProps) => {
  const className = classNames(css.anchor, {
    [`${css['anchor--no-underline']}`]: !underline,
  });

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
};
