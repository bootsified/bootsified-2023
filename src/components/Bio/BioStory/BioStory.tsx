import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'

import BioNav from '../BioNav'

import styles from '../Bio.module.css'
import richStyles from '@styles/rich-text.module.css'

const BioStory = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navTop}>
        <BioNav />
      </div>
      <h1 className={styles.heading}>The “Boots” Story</h1>
      <div className={clsx(styles.content, richStyles.richText)}>
        <p>
          In 1998, I was a full-time musician in a touring rock band, when we started to realize
          other bands around had these things called “websites”. Since we didn’t want to be left
          behind, and I was the only one of us who had a computer (a SWEET Pentium I with a 2GB hard
          drive, no less), we all pitched in and bought Macromedia Dreamweaver 2, and suddenly I was
          off to figure out “
          <Link href="https://www.youtube.com/watch?v=UlJku_CSyNg" target="_blank">
            What is internet anyway?
          </Link>
          ”
        </p>

        <p>
          It wasn’t long before I was completely obsessed with building websites, so a couple years
          later when I was getting pretty burned out from playing the same bars over and over, I
          jumped at the chance to join a young agency in Austin to be their “web guy”. I was
          completely in over my head, but it was a great opportunity to rise to the challenge. Then
          just as I was starting to get on my feet, this thing called the “
          <Link href="https://en.wikipedia.org/wiki/Dot-com_bubble" target="_blank">
            Dot Com Bubble
          </Link>
          ” burst, leaving me without a job and heading back to Dallas to find my next stop.
        </p>

        <p>
          After a couple years of freelancing (including getting commissioned by the Hashemite
          Kingdom of Jordan to build a website for the{' '}
          <Link href="/work/web-dev">Jordan Tourism Board</Link>… no joke), I met a designer named
          Aaron McClung in 2004 who was starting his own web design agency, AM Design. In seven
          years, we went from just the two of us working in his home office, to a company of 20+
          taking up almost the entire floor of an office building. Over that time, I transitioned
          from being “the web guy” to “the Flash guy”. We became well known for building
          large-scale, immersive Flash websites. To this day, it was probably the most fun I’ve had
          building websites. Flash was a total joy to work with, and I was becoming a master of
          complex Actionscripted experiences… that is, until{' '}
          <Link
            href="https://www.howtogeek.com/805605/this-is-how-steve-jobs-killed-adobe-flash/"
            target="_blank"
          >
            Steve Jobs decided Flash was dead
          </Link>
          . With no more Flash projects, it was time for a change.
        </p>

        <p>
          A former AM Design designer, and friend of mine, worked at a small, boutique design/web
          agency in Dallas, called Switch Creative (now just{' '}
          <Link href="https://switch.is" target="_blank">
            Switch
          </Link>
          ). They were in need of a developer to join their two-person team, and help build
          ExpressionEngine sites for their clients. Fortunately for me, they were able to give me
          time to get my “straight development” skills up and running again. Within no time, I was
          taking the beautiful designs from the Switch designers, and creating super-clean
          content-managed websites for a pretty diverse roster of clients - banks, restaurants, golf
          and tennis clubs, adoption agencies, finance companies, clothing companies, you name it.
          At Switch, it was all about the design, so I was able to really let loose with fun,
          creative ideas. It was during this time where I really honed my eye for design and a feel
          for branding.
        </p>

        <p>
          After almost five years at Switch, we had started to build a partnership with another
          development agency in town,{' '}
          <Link href="https://simplygoodwork.com" target="_blank">
            Good Work
          </Link>
          , who would handle the overflow projects our small team couldn’t get to. On one very
          strange, awkward November afternoon, I was told without warning that Switch was phasing
          out its web development side, so I was now working for Good Work. I had been traded. A web
          developer. Traded. &#129300;
        </p>

        <p>
          Needless to say, I was a bit taken aback. BUT, as it turned out, it was the best thing
          that could have happened to me at the time. I had already gotten pretty close with Garrett
          Winder, the owner of Good Work, through the Switch partnership, and the guys at Good Work
          were amazing developers. It was during my time at Good Work that I upped my technical
          game, diving head first into{' '}
          <Link href="https://craftcms.com" target="_blank">
            CraftCMS
          </Link>{' '}
          - the BEST CMS in the business, AFAIAC - and getting much more accustomed to the modern
          tools of the developer scene. The websites we were building were much more technical than
          what I’d been used to up until then, so I was able to become a much more balanced
          developer, I think.
        </p>

        <p>
          One of our clients at Good Work was an up-and-coming performance menswear company, called
          Mizzen+Main. I had helped get their original site up and running, and handled the
          maintenance for them until they were too big for us to keep up with. After a period of
          struggling with other developers, Mizzen decided they wanted to hire an in-house
          developer, so they approached Garrett at Good Work to help them with the search. Sure
          enough, after a dozen disappointing interviews with developers, Mizzen and Garrett both
          came to the realization that I would be a really good fit for them. So Garrett being the
          amazing, selfless boss that he is, approached me about moving on to Mizzen+Main. Honestly,
          it was exactly the job I’d been praying for, and I’m forever grateful that he was kind
          enough to encourage my move.
        </p>

        <p>
          So, here I was.{' '}
          <Link href="/work/web-dev">Sr Manager of Web Development for Mizzen+Main</Link>. I was in
          charge of a pretty massive Shopify store… that unfortunately had been through so many
          developers that it really needed a lot of work at the time. Fortunately, that was my job
          and I was up for the task. I spent the next couple years rebuilding the site section by
          section, while also managing the day-to-day business of a large-scale eCommerce store. The
          upside was that I got a TON of intense, real-world experience with custom Liquid
          templating in Shopify. The down side was… I was stuck working in Liquid within the
          restrictive Shopify theme environment. If we were going to get to “the next level”, we
          needed a BIG change.
        </p>

        <p>
          As luck would have it, one of the brilliant back-end developers from Good Work had left
          and was in need of a job. I was able to scoop him up at Mizzen, and the two of us set off
          to build the next great Mizzen+Main website… after a two-year economic struggle through a
          worldwide pandemic, of course. Dammit, COVID!
        </p>

        <p>
          Nevertheless, in 2022 we finally got the go ahead to begin work on Mizzen v2, which would
          coincide with a rebranding of the company for their 10th anniversary. This time, we were
          finally moving the front end off of Shopify/Liquid, and onto React/Next.js/Vercel, pulling
          store data through the Shopify APIs. Gone was the rat’s nest of Shopify “CMS” hacks, and
          now we would have a fully-customized headless CMS using Sanity.io. AND I would finally be
          able to get out from under the Liquid templates and into a much more modern React front
          end environment. It was a HUGE learning curve for me, but I was up for the challenge. In
          about 4 months, I led us through the development of the new site, and in October of 2022,
          we successfully launched the new site. It was literally a dream come true, and the
          culmination of about 4.5 years of work and planning. 2023 was going to be the start of a
          new era at Mizzen+Main for me and my team… until “restructuring” meant the elimination of
          my position at the company. #WompWomp
        </p>

        <p>
          SOOO… let’s see how the next chapter in the story turns out. I’ll keep you posted. Anyone
          looking for a seasoned front-end developer / eCommerce website manager, please{' '}
          <Link href="/contact">hit me up</Link>!
        </p>
      </div>
    </div>
  )
}

export default BioStory
