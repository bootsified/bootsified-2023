import React from 'react'
import photoKid from '@public/images/john-boots-highland-kid.jpg'
import photoYard from '@public/images/john-boots-highland-yard.jpg'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { spanBass, spanWeb } from '@/utils/helpers'

import BioNav from './BioNav'

import styles from './Bio.module.css'
import richStyles from '@styles/rich-text.module.css'

const Bio = () => {
  return (
    <div className={clsx(styles.container, richStyles.richText)}>
      <h1 className={styles.heading}>A little about me...</h1>
      <div className={styles.content}>
        <div className={styles.headerImage}>
          <Image
            src={photoKid}
            alt="Boots as a kid in the snow, dressed in an army hat and coat."
            width={400}
            height={400}
          />
        </div>
        <p>
          My name is <strong>John Highland</strong>, but most people call me{' '}
          <strong>“Boots”</strong> - long story. I’m a web developer, musician, husband, and father
          of two awesome boys, currently living in Dallas, TX (soon to be Seattle, WA… more on that
          coming soon). I was born in Cincinnati, OH, but my family moved to Dallas when I was two.
          As they say, “I’m not a native Texan, but I got here as soon as I could.” Aside from a few
          years in Ft Worth for college (
          <Link href="https://www.tcu.edu/" target="_blank">
            GO FROGS!
          </Link>
          ) and a couple years in Austin for a job, I’ve lived here ever since.
        </p>

        <p>
          As a web developer, I specialize in advanced HTML/CSS layouts that are cross-browser,
          accessible, and responsive to any device size. I’m experienced with vanilla JavaScript,
          and have become very familiar with React components and Next.js over the last couple
          years. I’ve also had significant real-world experience running a large eCommerce store
          (Shopify), as the Sr Manager of Web Development for the performance menswear company,
          Mizzen+Main. In my 4.5 years with Mizzen, we ran into all kinds of ups and downs, and I
          was always able to get us across the finish line. It’s been an up and down relationship,
          but I definitely know Shopify.
        </p>

        <p>
          So essentially, my key skill is problem solving. In the {spanWeb()} years I’ve been
          building and managing websites, I’ve just about seen it all, so as the great American
          poet,{' '}
          <Link href="https://en.wikipedia.org/wiki/Vanilla_Ice" target="_blank">
            Robert Matthew Van Winkle
          </Link>
          , once put it,{' '}
          <em>
            “
            <Link href="https://youtu.be/rog8ou-ZepE?t=51" target="_blank">
              If there was a problem, YO! I’ll solve it.
            </Link>
            ”
          </em>
        </p>

        <p>
          As a musician, I’ve been primarily a bass guitarist for {spanBass()} years, and I toured
          professionally with various rock bands for nearly 15 years of that. In addition to bass
          guitar, I also play acoustic bass, guitar, drums, and cello (my first instrument); and
          have experience with synth programming and studio mixing and producing - mostly with Logic
          Pro. Music has taken a back seat for me, since web development took over, but I still try
          to get back to it from time to time. I actually have{' '}
          <Link href="/work/music">an album of my own</Link> in the works that will hopefully see
          the light of day sometime in 2023. I’ll keep you posted.
        </p>

        <p>
          So, this is kinda the CliffsNotes version of my story. If you have a minute, you can read
          on below...
        </p>

        <div className={styles.navBottom}>
          <BioNav />
        </div>

        <div className={styles.footerImage}>
          <Image
            src={photoYard}
            alt="Boots standing in the front yard of his home, holding his laptop."
            width={900}
            height={506}
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default Bio
