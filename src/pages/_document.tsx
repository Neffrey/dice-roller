// FRAMEWORK
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" data-theme="dark">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png?v=2.0"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png?v=2.0"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png?v=2.0"
          />
          <link rel="manifest" href="/site.webmanifest?v=2.0" />
          <link
            rel="mask-icon"
            href="/safari-pinned-tab.svg?v=2.0"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/favicon.ico?v=2.0" />
          <meta name="apple-mobile-web-app-title" content="Dice Roller" />
          <meta name="application-name" content="Dice Roller" />
          <meta name="theme-color" content="#333333" />
          <meta name="msapplication-TileColor" content="#00a3c4" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Dice Roller by Neffrey" />
          <meta
            property="og:description"
            content="Roll any number of dice with any number of sides - A better multi dice roller"
          />
          <meta
            property="og:image"
            content="https://ndiceroller.com/preview.jpg"
          />
          <meta property="og:url" content="https://ndiceroller.com/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  // const sheets = new ServerStyleSheets();
  // const originalRenderPage = ctx.renderPage;

  // ctx.renderPage = () =>
  //   originalRenderPage({
  //     enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
  //   })

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
  };
};
