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
          </table>
        </div>
        <div className={styles.notes}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Semper viverra nam libero justo laoreet sit
            amet. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Amet est
            placerat in egestas erat imperdiet sed. Sed enim ut sem viverra aliquet eget. In nulla
            posuere sollicitudin aliquam. Vel quam elementum pulvinar etiam non quam lacus. Tempor
            id eu nisl nunc mi ipsum faucibus vitae aliquet. Pellentesque habitant morbi tristique
            senectus et netus. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis.
            Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Quam adipiscing vitae
            proin sagittis nisl rhoncus mattis rhoncus urna. Enim blandit volutpat maecenas
            volutpat. Convallis a cras semper auctor. Et netus et malesuada fames. Sit amet nulla
            facilisi morbi. Semper auctor neque vitae tempus. In eu mi bibendum neque egestas congue
            quisque egestas.
          </p>

          <p>
            Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Pharetra convallis posuere
            morbi leo urna molestie at elementum eu. Non sodales neque sodales ut. Quis auctor elit
            sed vulputate mi sit amet mauris commodo. Quis viverra nibh cras pulvinar mattis nunc
            sed. Viverra suspendisse potenti nullam ac tortor vitae purus. Massa tincidunt nunc
            pulvinar sapien et ligula ullamcorper malesuada. Sed blandit libero volutpat sed cras.
            Nisi lacus sed viverra tellus in hac habitasse platea. Ante in nibh mauris cursus mattis
            molestie a.
          </p>

          <p>
            Varius sit amet mattis vulputate. Ut tellus elementum sagittis vitae. Facilisi morbi
            tempus iaculis urna id volutpat. Sapien pellentesque habitant morbi tristique senectus
            et netus et. Sed sed risus pretium quam vulputate dignissim suspendisse in est. Eget sit
            amet tellus cras adipiscing enim eu turpis egestas. Tortor consequat id porta nibh
            venenatis cras sed. Integer quis auctor elit sed vulputate mi sit. Sed adipiscing diam
            donec adipiscing tristique risus. Bibendum arcu vitae elementum curabitur vitae nunc.
            Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Orci nulla
            pellentesque dignissim enim. Auctor urna nunc id cursus metus aliquam eleifend. Lacus
            suspendisse faucibus interdum posuere.
          </p>

          <p>
            Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Tellus orci ac auctor
            augue mauris augue. Id porta nibh venenatis cras sed. Nunc scelerisque viverra mauris
            in. Arcu cursus euismod quis viverra. Nulla facilisi nullam vehicula ipsum a. Tortor
            dignissim convallis aenean et tortor at risus viverra adipiscing. Erat pellentesque
            adipiscing commodo elit at imperdiet dui. Urna id volutpat lacus laoreet non curabitur.
            Tempor orci dapibus ultrices in iaculis nunc. Non nisi est sit amet. Donec ac odio
            tempor orci dapibus ultrices. At urna condimentum mattis pellentesque id nibh. Sed
            viverra ipsum nunc aliquet. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor.
            Imperdiet proin fermentum leo vel. Mus mauris vitae ultricies leo.
          </p>

          <p>
            Varius vel pharetra vel turpis nunc. Nec feugiat nisl pretium fusce id velit ut tortor
            pretium. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Tempor
            commodo ullamcorper a lacus. Faucibus ornare suspendisse sed nisi lacus sed. Neque
            laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Id nibh
            tortor id aliquet lectus proin nibh. Facilisis mauris sit amet massa vitae tortor
            condimentum. Libero volutpat sed cras ornare arcu dui. Sollicitudin aliquam ultrices
            sagittis orci a scelerisque purus semper. Adipiscing at in tellus integer feugiat
            scelerisque varius. Nulla facilisi nullam vehicula ipsum. Ut diam quam nulla porttitor
            massa id. Turpis egestas pretium aenean pharetra magna ac placerat. Sociis natoque
            penatibus et magnis dis parturient montes nascetur. Sed adipiscing diam donec
            adipiscing. Iaculis eu non diam phasellus vestibulum lorem sed. Egestas maecenas
            pharetra convallis posuere morbi leo urna molestie at.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
