import React from 'react'
import Document, { Html, Head, NextScript, Main } from 'next/document'

export default class MyDocument extends Document {
  render (): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto+Mono&display=swap" rel="stylesheet" />
          <link href="https://img.icons8.com/color/48/000000/snorlax.png" rel="shortcut icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
