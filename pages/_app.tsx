import Head from 'next/head';
import type { AppProps } from 'next/app'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link rel="shortcut icon" href="https://res.cloudinary.com/dnxchppfm/image/upload/c_scale,w_1041/v1658069585/perspective_matte_tpvbhz.webp" type="image/x-icon" />

      <meta name="description" content="Open Jira allows you to manage tasks and organize them, by their status, in a simple way in a user-friendly interface. Try it now! 😌" />
      <meta name="author" content="Franklin Martinez" />
      <meta name="title" content="Open Jira - App to manage tasks in a friendly and simple way." />
      <meta name="image" content="https://res.cloudinary.com/dnxchppfm/image/upload/v1658068990/open-jira/open-jira-header_h0xi5s.webp" />

      <meta property="og:title" content="Open Jira - App to manage tasks in a friendly and simple way." />
      <meta property="og:description" content="Open Jira allows you to manage tasks and organize them, by their status, in a simple way in a user-friendly interface. Try it now! 😌" />
      <meta property="og:url" content="https://open-jira-fml.vercel.app" />
      <meta property="og:image" content="https://res.cloudinary.com/dnxchppfm/image/upload/v1658068990/open-jira/open-jira-header_h0xi5s.webp" />
      <meta property="og:type" content="website" />

      <meta name="twitter:title" content="Open Jira - App to manage tasks in a friendly and simple way." />
      <meta name="twitter:description" content="Open Jira allows you to manage tasks and organize them, by their status, in a simple way in a user-friendly interface. Try it now! 😌" />
      <meta name="twitter:url" content="https://open-jira-fml.vercel.app" />
      <meta name="twitter:image" content="https://res.cloudinary.com/dnxchppfm/image/upload/v1658068990/open-jira/open-jira-header_h0xi5s.webp" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Frankomtz361" />
      <meta name="twitter:creator" content="@Frankomtz361" />

      <title>Open Jira</title>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
