import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import nextSeoConfig from '@/mocks/next-seo.config'
import '@/styles/globals/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Weather Challenge</title>
        <link rel='shortcut icon' href='/img/icon-512.png' />
        <link rel='apple-touch-icon' href='/img/icon-512.png' />
        <meta name='description' content='Weather front-end challenge' />
      </Head>
      <DefaultSeo {...nextSeoConfig} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
