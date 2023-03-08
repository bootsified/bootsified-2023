import Footer from '@components/Footer'
import Header from '@components/Header'
import Nav from '@components/Nav'
import Link from 'next/link'

import Loader from '@/components/Loader'
import Progress from '@/components/Progress'
import SeattleBadge from '@/components/SeattleBadge'
import { UIProvider } from '@/context/UIContext'
import { SITE_URL } from '@/utils/constants'

import { AnalyticsWrapper } from './analytics'
import { gochiHand, righteous } from './fonts'

import '@styles/globals.css'
import styles from '@styles/RootLayout.module.css'

////////////////////////////////////////////////////////
// TODO: When they get their shit together, here you go:
////////////////////////////////////////////////////////

// const pageTitle = `Web Development, Bass Guitar, and Much More`
// const pageDescription =
//   "The personal landing page for John 'Boots' Highland - a Dallas-based bass guitarist, web developer, husband and father."
// const url = ''

// export const metadata = {
//   title: {
//     default: 'Web Development, Bass Guitar, and Much More - John "Boots" Highland',
//     template: '%s - John "Boots" Highland',
//   },
//   description: pageDescription,
//   icons: {
//     icon: [
//       { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
//       { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
//     ],
//     apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
//     other: [
//       {
//         rel: 'manifest',
//         url: '/site.webmanifest',
//       },
//       {
//         rel: 'mask-icon',
//         url: '/safari-pinned-tab.svg',
//         color: '#b00075',
//       },
//     ],
//   },
//   appleMobileWebAppTitle: 'Boots!',
//   applicationName: 'Boots!',
//   msapplicationTileColor: '#B00075',
//   themeColor: '#B00075',
//   twitter: {
//     card: 'summary',
//     title: pageTitle,
//     description: pageDescription,
//     creator: '@bootsified',
//     images: [`${SITE_URL}/images/bootsified-seo.png`],
//     url: `${SITE_URL}${url}`,
//   },
//   openGraph: {
//     title: pageTitle,
//     description: pageDescription,
//     url: `${SITE_URL}${url}`,
//     siteName: 'Bootsified',
//     images: [
//       {
//         url: `${SITE_URL}/images/bootsified-seo.png`,
//         width: 1200,
//         height: 630,
//       },
//     ],
//     locale: 'en-US',
//     type: 'website',
//   },
// }

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${gochiHand.variable} ${righteous.variable}`}>
      <head />
      <body className={styles.body}>
        <UIProvider>
          <Loader />
          <Progress />
        </UIProvider>
        {/* <SeattleBadge /> */}
        <Header className={styles.header} />
        <Nav className={styles.nav} />
        <main className={styles.main}>{children}</main>
        <Footer className={styles.footer} />
        <AnalyticsWrapper />
      </body>
    </html>
  )
}

export default RootLayout
