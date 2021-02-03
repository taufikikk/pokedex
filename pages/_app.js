import { ApolloProvider } from '@apollo/client'
import client from '../config/graphql'
import { Header, Footer } from '../components'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Pokédex</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="Description" content="List of Pokemon data with a detail of moves and types ability"></meta>
        <link rel="icon" href="/Pokeball.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  )
}

export default MyApp
