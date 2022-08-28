import Document, { Head, Html, Main, NextScript } from 'next/document'

import NextSeo from '@/mocks/next-seo'

class MyDocument extends Document {
  render() {
    return (
      <Html lang={NextSeo.openGraph.locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
