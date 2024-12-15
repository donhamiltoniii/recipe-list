import { AppProps } from 'next/app';
import { Container } from '@/components/container';
import { Header } from '@/components/header';
import '../styles.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header></Header>
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}
