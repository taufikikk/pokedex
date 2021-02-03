import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { globalStyles } from '../styles/styles'

export default class SiteDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    return (
      <Html lang="en">
        {globalStyles}
        <Head>
          <title>Pokédex</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta charSet="utf-8" />
          <meta name="Description" content="List of Pokemon data with a detail of moves and types ability"></meta>
          <link rel="icon" href="/Pokeball.png" />
        </Head>
        <body>
          <div className="root">
            {main}
          </div>
          <NextScript />
        </body>
      </Html>
    )
  }
}