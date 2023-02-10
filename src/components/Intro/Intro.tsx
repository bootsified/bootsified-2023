import React from 'react'
import Button from '@components/Button'
import photo from '@public/images/me-unicorns.jpg'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Intro.module.css'

const Intro = () => {
  const thisYear = new Date().getFullYear()
  const spanWeb = thisYear - 1997
  const spanBass = thisYear - 1983

  console.log('spanWeb', spanWeb)

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.heading}>Hello!</h1>
        <p>
          My name is John Highland, but most people know me as <strong>&ldquo;Boots&rdquo;</strong>{' '}
          &mdash; long story... I currently live in Dallas, TX, with my very loving and
          understanding wife and two <s>terrorists</s> sons. For {spanWeb} years, I’ve been
          developing websites, but my first passion was playing bass guitar ({thisYear} marks{' '}
          {spanBass} years). Welcome to my home. Take a look around... make yourself comfy.{' '}
          <Link href="/contact">Let me know</Link> if you need anything.
        </p>
        <p>
          <Button variant="primary" href="/bio">
            Get to know me
          </Button>
        </p>
      </div>
      <div className={styles.image}>
        <Image
          src={photo}
          alt="Photo of Boots, sitting in front of a backdrop of cartoon unicorns."
        />
      </div>
    </div>
  )
}

export default Intro
