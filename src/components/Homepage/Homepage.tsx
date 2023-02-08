import React from 'react'
import Link from 'next/link'

import styles from './Homepage.module.css'

function Homepage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>This is the homepage, yo!</h1>
        <p>
          How &rsquo;bout we go to <Link href="/about">the About Page</Link>?
        </p>
      </div>
    </div>
  )
}

export default Homepage
