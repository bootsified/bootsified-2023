import Footer from '@components/Footer'
import Header from '@components/Header'
import { Righteous } from '@next/font/google'
import Link from 'next/link'

import 'what-input'

import '@styles/globals.css'

const righteous = Righteous({
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
      <body className={righteous.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
