import React from 'react'
import Image from 'next/image'

import styles from './Project.module.css'

type ProjectProps = {
  project: {
    id: string
    title: string
    client: string
    year: string
    projectType: string
    category: string
    agency: string
    logo: string
    screenshot: string
    url: string
    media: string
    mediaType: string
    skills: string[]
    notes: string
  }
}

const Project = ({ project }: ProjectProps) => {
  const {
    title,
    client,
    year,
    projectType,
    category,
    agency,
    logo,
    screenshot,
    url,
    media,
    mediaType,
    skills,
    notes,
  } = project

  const ctaLabel =
    projectType === 'Song'
      ? 'Listen Now'
      : projectType.includes('Video')
      ? 'Watch Now'
      : projectType === 'photo'
      ? 'View Photo'
      : 'More Info'

  return (
    <div className={styles.container} data-category={category.replace('-', ' ')}>
      <h2 className={styles.heading}>
        {title}{' '}
        <span>
          {projectType} &bull; {year}
        </span>
      </h2>
      <div className={styles.logo}>
        <Image src={logo} height={100} width={100} alt={`${client} Logo`} />
      </div>
      <div className={styles.content}>
        <div className={styles.screenshot}>
          <Image src={screenshot} height={225} width={400} alt={`${title} Screenshot`} />
        </div>
        <div className={styles.cta}>
          <button>{ctaLabel}</button>
        </div>
      </div>
    </div>
  )
}

export default Project
