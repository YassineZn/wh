import { Layout } from "../components/layout/Layout";
import nProgress from "nprogress";
import { appWithTranslation } from "next-i18next";
import Router from "next/router";

import "../styles/globals.css";
import "../styles/nprogress.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  Router.events.on("routeChangeStart", nProgress.start);
  Router.events.on("routeChangeError ", nProgress.done);
  Router.events.on("routeChangeComplete", nProgress.done);

  return (
    <>
      <Head>
        <title>WH – WH İNTERNATIONAL GROUPS</title>
        <meta name="description" content="WH İNTERNATIONAL GROUPS" />
        <meta name="keywords" content="WH İNTERNATIONAL GROUPS" />
        <meta name="author" content="WH İNTERNATIONAL GROUPS" />
        <link rel="icon" href="/icons/fav/32.png" sizes="32x32" />
        <link rel="icon" href="/icons/fav/192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/icons/fav/180.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default appWithTranslation(App);
