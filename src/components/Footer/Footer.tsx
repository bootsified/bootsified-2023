import React from 'react'
import Splat from '@assets/images/logo-splat.svg'
import { Gochi_Hand } from '@next/font/google'
import clsx from 'clsx'
import Link from 'next/link'

import styles from './Footer.module.css'

const gochiHand = Gochi_Hand({
  weight: ['400'],
  subsets: ['latin'],
})

type FooterProps = {
  className: string
}

const Footer = ({ className }: FooterProps) => {
  const year = new Date().getFullYear()

  return (
    <footer className={clsx(styles.wrapper, className)}>
      <div className={styles.container}>
        <p className={styles.copyright}>&copy; {year} Bootsified</p>
        <div className={styles.splatText}>
          <Link href="/" className={styles.splat}>
            <Splat />
          </Link>
          <p className={gochiHand.className}>
            <span className={styles.group}>They&rsquo;re not booing...</span>{' '}
            <span className={styles.group}>
              They&rsquo;re chanting &ldquo;BOOOOOOOOTS!!!&rdquo;
            </span>
          </p>
        </div>
        <p className={styles.madeWith}>
          Made with{' '}
          <span title="AKA love" className={styles.heart}>
            &hearts;
          </span>{' '}
          from Dallas, TX
        </p>
      </div>
    </footer>
  )
}

export default Footer
