import styles from "../styles/main.module.scss";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import "../styles/global.css";
import Head from "next/head";

const roboto = Roboto({
  weight: ["100", "300", "400"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>J. Austin McBee</title>
        <meta name="description" content="Resume website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>"
        />
      </Head>
      <main className={`${styles.container} ${roboto.className}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
