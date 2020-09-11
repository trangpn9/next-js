import App from 'next/app'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/globals.css'

import { appWithTranslation } from '../i18n'

function MyApp({ Component, pageProps }) {      
  return (
    <>
      <Head>
        {/* <script src="http://code.jquery.com/jquery-3.5.1.slim.js" integrity="sha256-DrT5NfxfbHvMHux31Lkhxg42LY6of8TaYyK50jnxRnM=" crossOrigin="anonymous"></script> */}
        <link
          rel="stylesheet"
          type="text/css"  
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />        
      </Head>

      <Header/>            
        
      <Component {...pageProps} />
            
      <Footer/>      
    </>    
  )
}

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp)
