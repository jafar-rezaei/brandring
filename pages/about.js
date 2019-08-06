import Head from 'next/head'
import Layout from '../Components/Layout'
import { useTranslation } from 'react-i18next'

export default function About () {
  const { t, i18n } = useTranslation()

  return (
    <Layout>
      {t('hello.label')}

      <Head>
        <title>درباره ما</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>صفحه درباره ما</p>
    </Layout>
  )
}
