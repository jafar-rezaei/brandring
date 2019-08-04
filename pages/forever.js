
import React, { Component } from 'react'
import Head from 'next/head'
import Layout from '../Components/Layout'


export default class Forever extends Component {
  // Add some delay
  static async getInitialProps () {
    await new Promise(resolve => {
      setTimeout(resolve, 3000)
    })
    return {}
  }

  render () {
    return (
    <Layout>
      <Head>
        <title>sdsadsad</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>xxxxxxxا</p>
    </Layout>
  )
  }
}