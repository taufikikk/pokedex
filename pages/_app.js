import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import client from '../config/graphql'
import HeadStatus from '../components/HeadStatus'
import Header from '../components/Header'
import Footer from '../components/Footer'
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <html lang="en">
        <HeadStatus />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </html>
    </ApolloProvider>
  )
}

export default MyApp
