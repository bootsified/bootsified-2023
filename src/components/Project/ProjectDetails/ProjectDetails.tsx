/* eslint-disable @next/next/no-img-element */

import React from 'react'
import ReactPlayer from 'react-player'
import Image from 'next/image'

import styles from './ProjectDetails.module.css'

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

const ProjectDetails = ({ project }: ProjectProps) => {
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

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <div className={styles.media}>
        {media !== '' ? (
          media.includes('.mp4') ? (
            <ReactPlayer
              url={media}
              light={true}
              controls={true}
              playing={true}
              width="100%"
              height="100%"
              style={{
                backgroundImage: `url(${screenshot})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
              }}
            />
          ) : (
            <ReactPlayer url={media} controls={true} width="100%" height="100%" />
          )
        ) : (
          <Image
            src={screenshot}
            width={640}
            height={360}
            alt={`${title} Screenshot`}
            quality={90}
          />
        )}
      </div>
    </div>
  )
}

export default ProjectDetails
