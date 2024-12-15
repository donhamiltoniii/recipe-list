import { Open_Sans } from 'next/font/google';
import { Header } from '@/components/header';
import '../styles.scss';
import { Container } from '@/components/container';

export const metadata = {
  title: "Dondon's Recipes",
  description: 'A collection of recipes that I like to make',
};

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '400',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={openSans.className} lang="en">
      <body>
        <Header />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
