import Head from 'next/head'
import Footer from '../components/layout/Footer'
import Navigation from '../components/layout/Navigation'
import '../styles/theme.scss'

function MyApp({ Component, pageProps }) {
  
  return <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
    </Head>
    <Navigation/>
    <div className="pageLayout pageBound">
      <Component {...pageProps} />
    </div>
    <Footer/>
  </>
}

export default MyApp
