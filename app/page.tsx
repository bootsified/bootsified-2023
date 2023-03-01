import React from 'react'

import FeaturedProjects from '@/components/FeaturedProjects'
import Intro from '@/components/Intro'

import styles from '@styles/HomePage.module.css'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Intro />
      <hr className={styles.divider} />
      <FeaturedProjects />
    </div>
  )
}

export default HomePage
