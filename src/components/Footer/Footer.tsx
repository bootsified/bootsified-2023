import React from 'react'
import Splat from '@assets/images/logo-splat.svg'
import clsx from 'clsx'

import styles from './Footer.module.css'

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
          <Splat />
          <p>
            <span className="group">They&rsquo;re not booing...</span>{' '}
            <span className="group">They&rsquo;re chanting &ldquo;BOOOOOOOOTS!!!&rdquo;</span>
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
