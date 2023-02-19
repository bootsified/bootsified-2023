import WorkNav from '@components/Work/WorkNav'

// import richStyles from '@styles/rich-text.module.css'
import { SITE_URL } from '@/utils/constants'

import styles from '@components/Work/Work.module.css'

const pageTitle = `My Projects`
const pageDescription =
  "Here is a few of the various projects I've had over the years - websites, music, goofy videos, etc."
const url = '/work'

export const metadata = {
  title: pageTitle,
  description: pageDescription,
  twitter: {
    title: pageTitle,
    description: pageDescription,
    url: `${SITE_URL}${url}`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${SITE_URL}${url}`,
  },
}

// TODO: A FIX IS COMING FOR THIS
// type MetaProps = {
//   params: any
// }

// export async function generateMetadata({ params }: MetaProps) {
//   console.log(params.slug)
//   const { slug } = params
//   const activeSection = slug ? sections.find(item => item.id === slug[0]) : sections[0]
//   return {
//     title: `Work - ${activeSection?.label} ${process.env.metaPageTitle}`,
//     description: activeSection?.seo,
//   }
// }

const WorkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>What I&rsquo;ve been up&nbsp;to...</h1>
      <div className={styles.nav}>
        <WorkNav />
      </div>
      {children}
    </div>
  )
}

export default WorkLayout
