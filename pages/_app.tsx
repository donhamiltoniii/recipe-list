import { AppProps } from 'next/app';

import { Container } from '../components/container/container';
import { Header } from '../components/header/header';

import '../styles/index.scss';

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
