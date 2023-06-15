import Head from "next/head";
import About from "@/components/about";

export default function Home() {
  return (
    <>
      <Head>
        <title>J. McBee | Software Engineer</title>
        <meta name="description" content="Resume website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
    </>
  );
}
