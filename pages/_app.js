import '../styles/globals.css'
import Navbar from './components/Home/Navbar'

function MyApp({ Component, pageProps }) {
  return <>
  <Navbar></Navbar>
  <Component {...pageProps} />
  </>
}

export default MyApp
