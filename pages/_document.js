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
        <Head />
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