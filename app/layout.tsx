import Footer from '@components/Footer'
import Header from '@components/Header'
import Nav from '@components/Nav'
import { Gochi_Hand, Righteous } from '@next/font/google'
import Link from 'next/link'

import 'what-input'

import '@styles/globals.css'
import styles from '@styles/RootLayout.module.css'

const righteous = Righteous({
  weight: ['400'],
  subsets: ['latin'],
})

const gochiHand = Gochi_Hand({
  weight: ['400'],
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
