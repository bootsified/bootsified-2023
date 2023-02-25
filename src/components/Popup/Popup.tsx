import React from 'react'
import Link from 'next/link'

import Button from '../Button'

import styles from './Popup.module.css'
import richStyles from '@styles/rich-text.module.css'

const Popup = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Greetings, employers!</h2>
      <div className={richStyles.richText}>
        <p className={styles.paragraph}>
          I&rsquo;m currently seeking a new{' '}
          <strong>front-end development/eCommerce site manager</strong> position. If you&rsquo;re
          here to check out my web work, or grab my resume, please use the links below. If you think
          I&rsquo;d be a good fit for your company, please <Link href="/contact">let me know</Link>.
          Thanks!
        </p>
        <div className={styles.buttons}>
          <Link href="/work/web-dev">
            <Button isLink variant="primary">
              My web work
            </Button>
          </Link>
          <Link href="/pdf/john-boots-highland-resume-2023.pdf" download>
            <Button isLink variant="primary">
              My resumé
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Popup
