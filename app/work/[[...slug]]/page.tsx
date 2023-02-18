import React from 'react'
import { projects, sections } from 'app/work/data'

import Project from '@/components/Project'

import styles from '@components/Work/Work.module.css'

// TODO: Make this meta data dynamic
export const metadata = {
  title: 'My Work',
  description: 'This will be my portfolio page.',
}

type WorkProps = {
  params: {
    slug: string
  }
}

const Work = ({ params }: WorkProps) => {
  const { slug } = params
  const activeSection = slug ? sections.find(item => item.id === slug[0]) : sections[0]
  let filteredProjects = projects

  if (activeSection?.id !== 'all') {
    filteredProjects = projects.filter(proj => proj.category === activeSection?.id)
  }

  return (
    <>
      {activeSection?.description && (
        <p dangerouslySetInnerHTML={{ __html: activeSection?.description }} />
      )}
      <div className={styles.projects}>
        {filteredProjects.length ? (
          filteredProjects.map(proj => <Project key={proj.id} project={proj} />)
        ) : (
          <p className={styles.noResults}>
            Oooops... There aren&rsquo;t any results for this category :(
          </p>
        )}
      </div>
    </>
  )
}

export default Work
