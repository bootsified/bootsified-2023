'use client'

import React, { useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Button from '@/components/Button'

import styles from './BioNav.module.css'

const BioNav = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  let label = ''

  switch (pathname) {
    case '/bio/developer':
      label = 'The Developer'
      break

    case '/bio/musician':
      label = 'The Musician'
      break

    case '/bio/the-boots-story':
      label = 'The “Boots” Story'
      break

    default:
      label = 'The rest of the story...'
      break
  }

  return (
    <div className={styles.container}>
      <Button
        variant="primary"
        className={clsx(styles.toggle)}
        onClick={() => {
          setOpen(!open)
        }}
        data-active={open}
      >
        {label}
      </Button>
      <ul className={styles.list} data-open={open}>
        <li>
          <Link href="/bio/developer">
            <Button
              className={styles.button}
              variant="primary"
              isLink
              data-is-active={pathname?.includes('developer')}
            >
              The Developer
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/bio/musician">
            <Button
              className={styles.button}
              variant="primary"
              isLink
              data-is-active={pathname?.includes('musician')}
            >
              The Musician
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/bio/the-boots-story">
            <Button
              className={styles.button}
              variant="primary"
              isLink
              data-is-active={pathname?.includes('story')}
            >
              The “Boots” Story
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default BioNav
