import { AppProps } from 'next/app';
import Head from 'next/head';
import 'normalize.css/normalize.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Rootz</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Rootz, Next.js, React, TypeScript, ESlint" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
