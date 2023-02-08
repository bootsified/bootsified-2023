import React from 'react'
import Signature from '@assets/images/boots-signature.svg'
import Link from 'next/link'

import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.branding}>
          <Link href="/">
            <Signature />
          </Link>
        </div>
        <div className={styles.stripes}>
          <div className={styles.stripe}></div>
          <div className={styles.stripe}></div>
          <div className={styles.stripe}></div>
        </div>
      </div>
    </div>
  )
}

export default Header
