'use client'

import React, { useEffect, useState } from 'react'
import Button from '@components/Button'
import Modal from '@components/Modal'
import Popup from '@components/Popup'
import photo from '@public/images/john-boots-highland-unicorns.jpg'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { ALWAYS_POPUP, MY_LOCATION } from '@/utils/constants'
import { spanBass, spanWeb, thisYear } from '@/utils/helpers'

import styles from './Intro.module.css'
import richStyles from '@styles/rich-text.module.css'

const Intro = () => {
  const [open, setOpen] = useState(false)

  console.log('spanWeb', spanWeb())

  useEffect(() => {
    if (!sessionStorage.getItem('visited') || ALWAYS_POPUP === 'true') {
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
            <strong>&ldquo;Boots&rdquo;</strong> &mdash; long story. I currently live in{' '}
            <span className="toolTip" data-tooltip="Moving to Seattle 06/23" tabIndex={0}>
              Dallas, TX
            </span>
            , with my very loving and understanding wife and two whacky sons. For {spanWeb()} years,
            I’ve been developing websites, but my first passion was playing bass guitar (
            {thisYear()} marks {spanBass()} years). Welcome to my home. Take a look around... make
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
    </>
  )
}

export default Intro
