import React from 'react'
import photoKid from '@public/images/john-boots-highland-kid.jpg'
import photoYard from '@public/images/john-boots-highland-yard.jpg'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { MY_LOCATION } from '@/utils/constants'
import { spanBass, spanWeb } from '@/utils/helpers'

import styles from './Bio.module.css'
import richStyles from '@styles/rich-text.module.css'

const Bio = () => {
  return (
    <div className={clsx(styles.container)}>
      <h1 className={styles.heading}>A little about me...</h1>
      <div className={clsx(styles.content, richStyles.richText)}>
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
          of two awesome boys, currently living in the Seattle area. I was born in Cincinnati, OH,
          but my family moved to Dallas, TX, when I was two. In Dallas, I grew up, went to school,
          played in multiple bands, strated a web developer career, found a wife, and birthed a
          couple sons. In 2023, we finally said goodbye to the brutal Texas Summers, and said hello
          to the Pacific Northwest. The new chapter begins...
        </p>

        <h2>As a web developer...</h2>

        <p>
          I specialize in advanced HTML/CSS layouts that are cross-browser, accessible, and
          responsive to any device size. I’m experienced with vanilla JavaScript, and have become
          very familiar with React components and Next.js over the last couple years.
        </p>

        <p>In a nutshell, I’m a huge lover of the “pretty side” of front-end dev. I love:</p>
        <ul>
          <li>CSS as a (programming?) language</li>
          <li>finding creative ways to layout a difficult design</li>
          <li>
            making a layout perfectly respond to everything from a watch to a giant studio display
          </li>
          <li>finding subtle ways to wow a user with animation/transitions</li>
          <li>marking up a site in a way that works, even without the CSS</li>
          <li>semantic markup (I’m a hopeless rule-follower)</li>
          <li>
            basically, anything involving the{' '}
            <Link
              href="https://bradfrost.com/blog/post/front-of-the-front-end-and-back-of-the-front-end-web-development/"
              target="_blank"
            >
              Front-of-the-Front-End
            </Link>{' '}
            (including JS)
          </li>
        </ul>

        <p>
          That said, I can also get me hands dirty. Most of my career (2004-2018) has been in the
          design agency trenches, building client sites start to finish. The first ~7 years building
          advanced, immersive Flash experiences, then mostly LAMP stack CMS jobs (ExpressionEngine
          back in the day, then CraftCMS) and some straight PHP sites. Recently, I ran a large
          Shopify store &mdash; tons of Liquid templating initially &mdash; but we eventually
          (finally!) moved to a React/Next.js/headless CMS setup. Now that I‘ve had a couple years
          of building React components (&hearts; CSS modules &hearts;), I’ve come to really love it
          &mdash; especially with Next.js and Vercel. That’s my go-to now.
        </p>

        <p>
          I’ve also had significant real-world experience running a large eCommerce site (Shopify),
          as the Sr Manager of Web Development for the performance menswear company, Mizzen+Main. In
          my 4.5 years with Mizzen, we ran into all kinds of ups and downs, and I was always able to
          get us across the finish line. It’s been a rocky relationship at times, but I definitely
          know Shopify.
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

        <h2>As a musician...</h2>

        <p>
          I’ve been primarily a bass guitarist for {spanBass()} years, and I toured professionally
          with various rock bands for nearly 15 years of that. In addition to bass guitar, I also
          play acoustic bass, guitar, drums, and cello (my first instrument); and have experience
          with synth programming and studio mixing and producing - mostly with Logic Pro. Music has
          taken a back seat for me, since web development took over, but I still try to get back to
          it from time to time. I actually have <Link href="/work/music">an album of my own</Link>{' '}
          in the works that will hopefully see the light of day sometime in 2023. I’ll keep you
          posted.
        </p>

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
