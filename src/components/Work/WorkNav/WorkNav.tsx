'use client'

import React, { useState } from 'react'
import Button from '@components/Button'
import { sections } from 'app/work/data'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './WorkNav.module.css'

const WorkNav = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const segments: string[] = pathname?.split('/') || []

  let titles = []
  for (let i = 0; i < sections.length; i++) {
    if (segments.includes(sections[i].id)) {
      titles.push(sections[i].label)
    }
  }

  return (
    <nav className={styles.container}>
      <h2 className="srOnly">Work Navigation:</h2>
      <Button
        variant="primary"
        className={clsx(styles.toggle)}
        onClick={() => {
          setOpen(!open)
        }}
        data-active={open}
      >
        {titles.length ? titles.join(' / ') : 'All'}
      </Button>
      <ul className={styles.list} data-open={open}>
        <>
          {sections.map(section => {
            let url = ''
            let isActive = false
            if (section.id === 'all') {
              url = '/work'
            } else {
              url = `/work/${section.id}`
            }
            if (url === pathname) {
              isActive = true
            } else if (pathname?.includes(section.id)) {
              isActive = true
            }
            return (
              <li key={section.id} className={styles.item}>
                <Link
                  href={url}
                  onClick={() => {
                    setOpen(false)
                  }}
                >
                  <Button
                    isLink={true}
                    className={styles.button}
                    variant="primary"
                    compact
                    data-is-active={isActive}
                  >
                    {section.id.replace('-', ' ')}
                  </Button>
                </Link>
              </li>
            )
          })}
        </>
      </ul>
    </nav>
  )
}

export default WorkNav
