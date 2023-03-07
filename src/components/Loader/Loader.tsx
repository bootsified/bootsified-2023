'use client'

import React from 'react'

import { useUIContext } from '@/context/UIContext'

import styles from './Loader.module.css'

const Loader = () => {
  const { isNavigating } = useUIContext()

  return <div className={styles.loader} data-is-navigating={isNavigating}></div>
}

export default Loader
