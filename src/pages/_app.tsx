
import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
    <Head>
      <title>Pokédex | Tamir Faria</title>
    </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
