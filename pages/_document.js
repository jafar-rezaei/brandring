import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <html>
        <Head>
          {/* Import CSS for nprogress */}
          <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
          <link rel='stylesheet' type='text/css' href='/static/css/app/brandring.css' />
          <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
