'use client'

import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Adding what-input here because:
// - it must be initialized client-side
// - this component is site-wide
// - this component is rendered client-side
import 'what-input'

import styles from './Nav.module.css'

type NavProps = {
  className: string
}

const Nav = ({ className }: NavProps) => {
  const pathname = usePathname()

  return (
    <nav className={clsx(styles.wrapper, className)}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/" className={pathname === '/' ? styles.isActive : ''} scroll={true}>
            Home
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/bio" className={pathname === '/bio' ? styles.isActive : ''} scroll={true}>
            Bio
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="/work"
            className={pathname?.includes('/work') ? styles.isActive : ''}
            scroll={true}
          >
            Work
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="/contact"
            className={pathname === '/contact' ? styles.isActive : ''}
            scroll={true}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
