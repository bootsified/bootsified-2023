'use client'

import React, { useEffect, useState } from 'react'
import Button from '@components/Button'
import Modal from '@components/Modal'
import photo from '@public/images/me-unicorns.jpg'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Intro.module.css'
import richStyles from '@styles/rich-text.module.css'

const Intro = () => {
  const thisYear = new Date().getFullYear()
  const spanWeb = thisYear - 1997
  const spanBass = thisYear - 1983
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem('visited')) {
      sessionStorage.setItem('visited', 'true')
      setOpen(true)
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={clsx(styles.text, richStyles.richText)}>
        <h1 className={styles.heading}>Hello!</h1>
        <p>
          My name is John Highland, but most people know me as <strong>&ldquo;Boots&rdquo;</strong>{' '}
          &mdash; long story. I currently live in Dallas, TX, with my very loving and understanding
          wife and two <s>terrorists</s> sons. For {spanWeb} years, I’ve been developing websites,
          but my first passion was playing bass guitar ({thisYear} marks {spanBass} years). Welcome
          to my home. Take a look around... make yourself comfy.{' '}
          <Link href="/contact">Let me know</Link> if you need anything.
        </p>
        <p className={styles.links}>
          <Link href="/bio">
            <Button className={styles.button} variant="primary" isLink={true}>
              Get to know me
            </Button>
          </Link>

          <Modal
            open={open}
            onOpenChange={() => {
              setOpen(!open)
            }}
            trigger={
              <Button variant="primary" className={styles.button}>
                Open the modal window
              </Button>
            }
            size="medium"
          >
            <h1>This is a modal window</h1>
          </Modal>
        </p>
      </div>
      <div className={styles.image}>
        <Image
          src={photo}
          alt="Photo of Boots, sitting in front of a backdrop of cartoon unicorns."
          placeholder="blur"
          width="500"
          height="500"
          loading="eager"
        />
      </div>
    </div>
  )
}

export default Intro
