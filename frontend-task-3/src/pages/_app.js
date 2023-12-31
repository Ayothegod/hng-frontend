import { SearchContextProvider } from "@/lib/seachStore";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>HNGx Image Gallery</title>
        <meta name="description" content="Built for HNGx frontend task 3" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchContextProvider>
        <Component {...pageProps} />
      </SearchContextProvider>
    </>
  );
}
