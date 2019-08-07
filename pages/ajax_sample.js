import fetch from 'isomorphic-unfetch'
import Layout from '../Components/Layout'

function Ajax_sample ({ stars }) {
  return <Layout>Next stars: {stars}</Layout>
}

/**
*
pathname - path section of URL
query - query string section of URL parsed as an object
asPath - String of the actual path (including the query) shows in the browser
req - HTTP request object (server only)
res - HTTP response object (server only)
err - Error object if any error is encountered during the rendering
*/
Ajax_sample.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: JSON.stringify(json) }
}

export default Ajax_sample
