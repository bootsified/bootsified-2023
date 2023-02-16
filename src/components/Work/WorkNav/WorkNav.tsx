'use client'

import React from 'react'
import Button from '@components/Button'
import { sections } from 'app/work/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './WorkNav.module.css'

const WorkNav = () => {
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
      <Button variant="primary" compact className={styles.toggle}>
        {titles.length ? titles.join(' / ') : 'All'}
      </Button>
      <ul className={styles.list}>
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
                <Link href={url}>
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
