import '../../styles/globals.css'

import { Header } from '../businessRules/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp