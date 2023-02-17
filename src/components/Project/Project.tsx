import React from 'react'
import Image from 'next/image'

import styles from './Project.module.css'

type ProjectProps = {
  project: {
    id: string
    title: string
    client: string
    year: string
    category: string
    agency: string
    logo: string
    screenshot: string
    url: string
    media: string
    skills: string[]
    notes: string
  }
}

const Project = ({ project }: ProjectProps) => {
  return (
    <div className={styles.container} data-category={project.category}>
      <h2 className={styles.heading}>{project.title}</h2>
      <div className={styles.logo}>
        <Image src={project.logo} height={100} width={100} alt={`${project.client} Logo`} />
      </div>
      <div className={styles.content}>
        <div className={styles.screenshot}>
          <Image
            src={project.screenshot}
            height={225}
            width={400}
            alt={`${project.title} Screenshot`}
          />
        </div>
      </div>
    </div>
  )
}

export default Project
