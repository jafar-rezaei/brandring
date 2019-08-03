import Link from 'next/link';
import Head from 'next/head';
import Layout from '../Components/Layout';


const Index = () => (
  <Layout>

  	<Head>
        <title>Site </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

  

    <p>Hello Next.js</p>


	<ul>
	    <li>
	      <a href='/robots.txt'>/robots.txt</a>
	    </li>
	    <li>
	      <a href='/sitemap.xml'>/sitemap.xml</a>
	    </li>
	    <li>
	      <a href='/favicon.ico'>/favicon.ico</a>
	    </li>
	</ul>

     <p>scoped!</p>
      <style jsx>{`
        p {
          color: blue;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
      <style global jsx>{`
        body {
          background: black;
        }
      `}</style>
  </Layout>
);

export default Index;