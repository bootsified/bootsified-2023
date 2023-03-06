import React from 'react'
import Image from 'next/image'

import styles from './SeattleBadge.module.css'

const SeattleBadge = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/images/seattle-badge.svg"
        width={200}
        height={200}
        alt="Moving to Seattle, WA, in June of 2023"
      />
    </div>
  )
}

export default SeattleBadge
