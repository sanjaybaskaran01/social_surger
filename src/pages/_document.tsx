import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Looking to boost your online presence? Choose Social Surger."
        />

        <meta property="og:site_name" content="Social Surger - Digital Agency" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://socialsurger.com/" />
        <meta property="og:title" content="Social Surger" />
        <meta
          property="og:description"
          content="Looking to boost your online presence? Choose Social Surger."
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://socialsurger.com/socialsurger_banner.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://socialsurger.com/" />
        <meta property="twitter:title" content="Social Surger" />
        <meta
          property="twitter:description"
          content="Looking to boost your online presence? Choose Social Surger."
        />
        <meta
          property="twitter:image"
          content="https://socialsurger.com/socialsurger_banner.png"
        />

        <meta name="keywords" content="ccs" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#131313 " />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
