import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import Layout from '../Components/Layout';
import Breadcrumb from '../Components/Breadcrumb';

export default function Register() {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <Head>
        <title>Register</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container">
        <Breadcrumb paths={[{ href: '/register', label: 'register' }]} />

        <div className="holder_white">
          <h2>Register</h2>
        </div>
      </div>

    </Layout>
  );
}
