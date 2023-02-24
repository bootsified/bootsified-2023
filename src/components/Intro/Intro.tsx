'use client'

import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Button from '@components/Button'
import Modal from '@components/Modal'
import Popup from '@components/Popup'
import photo from '@public/images/john-boots-highland-unicorns.jpg'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { ALWAYS_POPUP } from '@/utils/constants'

import styles from './Intro.module.css'
import richStyles from '@styles/rich-text.module.css'

const Intro = () => {
  const thisYear = new Date().getFullYear()
  const spanWeb = thisYear - 1997
  const spanBass = thisYear - 1983
  const [open, setOpen] = useState(false)

  useEffect(() => {
    console.log('ALWAYS_POPUP', ALWAYS_POPUP)
    if (!sessionStorage.getItem('visited') || ALWAYS_POPUP) {
      sessionStorage.setItem('visited', 'true')
      setTimeout(() => {
        setOpen(true)
      }, 3000)
    }
  }, [])

  return (
    <>
      <div className={styles.container}>
        <div className={clsx(styles.text, richStyles.richText)}>
          <h1 className={styles.heading}>Hello!</h1>
          <p>
            My name is John Highland, but most people know me as{' '}
            <strong>&ldquo;Boots&rdquo;</strong> &mdash; long story. I currently live in Dallas, TX,
            with my very loving and understanding wife and two <s>terrorists</s> sons. For {spanWeb}{' '}
            years, I’ve been developing websites, but my first passion was playing bass guitar (
            {thisYear} marks {spanBass} years). Welcome to my home. Take a look around... make
            yourself comfy. <Link href="/contact">Let me know</Link> if you need anything.
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
                <Button variant="primary" className={styles.button} style={{ display: 'none' }}>
                  Open the greeting window
                </Button>
              }
              size="small"
              tinyDots
            >
              <Popup />
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
            priority
          />
        </div>
      </div>

      {/* <div className={styles.player}>
        <ReactPlayer
          url="/images/work/video/mizzen-new-year-2023-web.mp4"
          width="100%"
          height="100%"
          controls={true}
        />
      </div> */}
    </>
  )
}

export default Intro
