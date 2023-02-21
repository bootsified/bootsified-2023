'use client'

import { useEffect } from 'react'

const ScrollUp = () => {
  console.log('FUUUUCCCKKKK!!!')
  useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), [])
  return null
}

export default ScrollUp
