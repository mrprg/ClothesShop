import "../styles/global.css";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Layout from "./Layout";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
