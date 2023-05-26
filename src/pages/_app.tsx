import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Social Surger - Digital Agency</title>
      </Head>
      <main className="text-[#222] font-medium">
        <Toaster />
        <Component {...pageProps} />
      </main>
    </>
  );
}
