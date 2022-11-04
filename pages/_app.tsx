import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import ReactGA from 'react-ga'
import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const TRACKING_ID = 'UA-64177570-10' // YOUR_OWN_TRACKING_ID
  ReactGA.initialize(TRACKING_ID)
  return (
    <ThemeProvider attribute='class' disableTransitionOnChange>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
