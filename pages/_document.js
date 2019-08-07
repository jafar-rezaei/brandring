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
          <link href="https://fonts.googleapis.com/css?family=Roboto|Mr+De+Haviland&display=swap" rel="stylesheet" />
          <link rel='stylesheet' type='text/css' href='/static/css/app/brandring.css' />
          <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
          <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
