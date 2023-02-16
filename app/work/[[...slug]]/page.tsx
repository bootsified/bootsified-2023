import React from 'react'
import { sections } from 'app/work/data'

// TODO: Fix this shit
export const metadata = {
  title: 'My Work',
  description: 'This will be my portfolio page.',
}

type WorkProps = {
  params: {
    slug: string
  }
}

export default function Work({ params }: WorkProps) {
  const { slug } = params
  const activeSection = slug ? sections.find(item => item.id === slug[0]) : null

  return <>{activeSection?.description && <p>{activeSection?.description}</p>}</>
}
