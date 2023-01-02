import { Layout } from "../components/layout/Layout";
import nProgress from "nprogress";
import { appWithTranslation } from "next-i18next";
import Router from "next/router";

import "../styles/globals.css";
import "../styles/nprogress.css";

function App({ Component, pageProps }) {
  Router.events.on("routeChangeStart", nProgress.start);
  Router.events.on("routeChangeError ", nProgress.done);
  Router.events.on("routeChangeComplete", nProgress.done);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default appWithTranslation(App);
