import React from 'react'
import Head from 'next/head'
import { withTranslation } from '../../i18n'

const Services = () => {
  return (
    <>
      <Head>
        <title>Services Page | EMS Vietnam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Services Page</h1>
      </div>
    </>
  )
}

Services.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})


export default withTranslation()(Services)
