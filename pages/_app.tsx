import '../styles/globals.css'
import type { AppProps } from 'next/app'
import CopyButton from '../components/CopyButton'
import ErrorBoundary from '../components/ErrorBoundary'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <CopyButton />
      <Component {...pageProps} />
    </ErrorBoundary>
  )
}

