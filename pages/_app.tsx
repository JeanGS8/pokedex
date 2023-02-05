import Layout from '@/components/Layout';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
        <title>{Component.name}</title>
      </Head>
      
      {(Component.name != 'NotFound')?
        <Layout>
          <Component {...pageProps} />
        </Layout>
        :
        <Component {...pageProps} />
      }
    </>
  );
}
