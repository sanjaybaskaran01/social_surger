import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Social Surger - Digital Agency</title>
        <meta property="og:title" content="Social Surger - Digital Agency" key="title" />
        {/* <meta
          name="title"
          content="Social Surger - Boost Social Media Presence"
          key="title"
        /> */}
        <meta
          name="description"
          content="Need a boost in online visibility? Choose Social Surger, the experts in crafting bespoke social media marketing strategies. Transform your brand's digital footprint, engage audiences, and drive unprecedented growth. Partner with us today for success tomorrow!"
        />

        <meta property="og:site_name" content="Social Surger" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://socialsurger.com/" />
        <meta property="og:title" content="Social Surger" />
        <meta
          property="og:description"
          content="Need a boost in online visibility? Choose Social Surger, the experts in crafting bespoke social media marketing strategies. Transform your brand's digital footprint, engage audiences, and drive unprecedented growth. Partner with us today for success tomorrow!"
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://ccs.csivit.com/ccs_banner.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ccs.csivit.com/" />
        <meta property="twitter:title" content="Social Surger" />
        <meta
          property="twitter:description"
          content="Need a boost in online visibility? Choose Social Surger, the experts in crafting bespoke social media marketing strategies. Transform your brand's digital footprint, engage audiences, and drive unprecedented growth. Partner with us today for success tomorrow!"
        />
        <meta
          property="twitter:image"
          content="https://ccs.csivit.com/ccs_banner.png"
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
