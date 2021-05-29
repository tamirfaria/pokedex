import React from 'react'
import Document, { Html, Head, NextScript, Main } from 'next/document'

export default class MyDocument extends Document {
  render (): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8"/>
          <link href="../public/favicon.ico" rel="icon" type="image/x-icon" />
          <title>Pokédex | Tamir Faria</title>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}
