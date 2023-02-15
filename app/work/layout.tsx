import WorkNav from '@components/Work/WorkNav'

import styles from '@components/Work/Work.module.css'
// import richStyles from '@styles/rich-text.module.css'

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>What I&rsquo;ve been up&nbsp;to...</h1>
      <WorkNav />
      {children}
    </div>
  )
}
