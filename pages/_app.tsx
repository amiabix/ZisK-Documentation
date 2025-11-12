import '../styles/globals.css'
import type { AppProps } from 'next/app'
import CopyButton from '../components/CopyButton'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CopyButton />
      <Component {...pageProps} />
    </>
  )
}

