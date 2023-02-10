import Footer from '@components/Footer'
import Header from '@components/Header'
import Nav from '@components/Nav'
import Link from 'next/link'

import { gochiHand, righteous } from './fonts'

import '@styles/globals.css'
import styles from '@styles/RootLayout.module.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${gochiHand.variable} ${righteous.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={styles.body}>
        <Header className={styles.header} />
        <Nav className={styles.nav} />
        <main className={styles.main}>{children}</main>
        <Footer className={styles.footer} />
      </body>
    </html>
  )
}
