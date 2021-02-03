import { ApolloProvider } from '@apollo/client'
import client from '../config/graphql'
import { Header, Footer } from '../components'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
        <Header />
        <Component {...pageProps} />
        <Footer />
    </ApolloProvider>
  )
}

export default MyApp
