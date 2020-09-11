import React from 'react'
import Head from 'next/head'
import { withTranslation } from '../../i18n'

const About = () => {
  return (
    <>
      <Head>
        <title>About Page | EMS Vietnam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>About Page</h1>
      </div>
    </>
  )
}

About.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})


export default withTranslation()(About)

