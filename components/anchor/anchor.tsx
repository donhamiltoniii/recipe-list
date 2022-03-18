import Link from 'next/link';

type LinkProps = {
  children: React.ReactNode;
  href: string;
  underline?: boolean;
};

export const Anchor = ({ children, href, underline = false }: LinkProps) => (
  <Link href={href}>
    <a style={{ textDecoration: underline ? 'underline' : 'none' }}>
      {children}
    </a>
  </Link>
);
