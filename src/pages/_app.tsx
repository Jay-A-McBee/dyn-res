import styles from "../styles/main.module.scss";
import type { AppProps } from "next/app";
import Link from "next/link";
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
