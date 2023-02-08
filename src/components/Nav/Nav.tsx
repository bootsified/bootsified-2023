'use client'

import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
          <Link href="/about" className={pathname === '/about' ? styles.isActive : ''}>
            About
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/work" className={pathname === '/work' ? styles.isActive : ''}>
            Work
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/contact" className={pathname === '/contact' ? styles.isActive : ''}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
