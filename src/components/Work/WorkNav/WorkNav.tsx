'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Button from '@/components/Button'

import styles from './WorkNav.module.css'

const WorkNav = () => {
  const pathname = usePathname()

  return (
    <nav className={styles.container}>
      <h2 className="srOnly">Work Navigation</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/work">
            <Button
              isLink={true}
              className={styles.button}
              variant="primary"
              compact
              data-is-active={pathname === '/work'}
            >
              All
            </Button>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/work/web-dev">
            <Button
              isLink={true}
              className={styles.button}
              variant="primary"
              compact
              data-is-active={pathname?.includes('web-dev')}
            >
              Web Dev
            </Button>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/work/music">
            <Button
              isLink={true}
              className={styles.button}
              variant="primary"
              compact
              data-is-active={pathname?.includes('music')}
            >
              Music
            </Button>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/work/photo">
            <Button
              isLink={true}
              className={styles.button}
              variant="primary"
              compact
              data-is-active={pathname?.includes('photo')}
            >
              Photo
            </Button>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/work/misc">
            <Button
              isLink={true}
              className={styles.button}
              variant="primary"
              compact
              data-is-active={pathname?.includes('misc')}
            >
              Misc
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default WorkNav
