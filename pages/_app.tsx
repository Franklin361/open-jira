import Head from 'next/head';
import type { AppProps } from 'next/app'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <link rel="shortcut icon" href="https://res.cloudinary.com/dnxchppfm/image/upload/v1646236443/like_cv6hwd.webp" type="image/x-icon" />
      <title>Open Jira</title>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
