/* eslint-disable @next/next/no-img-element */

import React, { useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/Button'

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
  const mediaPlayerRef = useRef<ReactPlayer>(null)
  const [playing, setPlaying] = useState(true)

  return (
    <div className={styles.container}>
      <div className={styles.headerMedia}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Image src={logo} alt={`${client} Logo`} width={76} height={76} quality={90} />
          </div>
          <h2 className={styles.heading}>
            {title}
            <span className={styles.typeYear}>
              {projectType} &bull; {year}
            </span>
          </h2>
        </div>
        <div className={styles.media}>
          {media !== '' ? (
            media.includes('.mp4') ? (
              <ReactPlayer
                ref={mediaPlayerRef}
                url={media}
                light={<img src={screenshot} alt={`${title} ${projectType} screenshot`} />}
                controls={true}
                playing={playing}
                width="100%"
                height="100%"
                onEnded={() => {
                  mediaPlayerRef.current?.showPreview()
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

        {url && (
          <div className={styles.cta}>
            <Link href={url} target="_blank">
              <Button isLink variant="primary">
                Visit {title} {projectType}
              </Button>
            </Link>
          </div>
        )}
      </div>
      <div className={styles.deetsNotes}>
        <div className={styles.deets}>
          <table>
            <tbody>
              <tr className={styles.deet}>
                <th scope="row">
                  {projectType === 'Song' || projectType === 'Music Video' ? 'Artist' : 'Client'}:
                </th>
                <td>{client}</td>
              </tr>
              {agency !== '' && projectType !== 'Music Video' && (
                <tr className={styles.deet}>
                  <th scope="row">Agency:</th>
                  <td>{agency}</td>
                </tr>
              )}
              <tr className={styles.deet}>
                <th scope="row">Skills used:</th>
                <td>{skills.join(', ')}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {notes !== '' && (
          <div className={styles.notes} dangerouslySetInnerHTML={{ __html: notes }} />
        )}
      </div>
    </div>
  )
}

export default ProjectDetails
