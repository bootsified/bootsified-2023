import React from 'react'

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
  return <p>This is the {slug || 'work'} page.</p>
}
