import React from 'react'
import Bio from '@components/Bio'

export const metadata = {
  title: `Bio ${process.env.metaPageTitle}`,
  description: 'Find out more about John "Boots" Highland.',
}

export default function About() {
  return <Bio />
}
