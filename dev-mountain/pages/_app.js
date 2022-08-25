import "../styles/globals.css";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dev Mountain</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <Script src="./TW-ELEMENTS-PATH/dist/js/index.min.js" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
