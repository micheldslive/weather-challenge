import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import nextSeoConfig from '@/mocks/next-seo'
import { AnimatePresence, motion } from 'framer-motion'
import '@/styles/index.scss'
import { useRouter } from 'next/router'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Weather Challenge</title>
        <link rel='shortcut icon' href='/img/icon-512.png' />
        <link rel='apple-touch-icon' href='/img/icon-512.png' />
        <meta name='description' content='Weather front-end challenge' />
      </Head>
      <DefaultSeo {...nextSeoConfig} />
      <AnimatePresence mode='wait'>
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default MyApp
