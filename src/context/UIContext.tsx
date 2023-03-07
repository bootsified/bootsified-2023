'use client'

import React, { useContext, useState } from 'react'

type UIContextInterface = {
  isNavigating: boolean
  setIsNavigating: (isNavigating: boolean) => void
}

type UIProviderProps = {
  children: React.ReactNode
}

export const UIContext = React.createContext<UIContextInterface | null>(null)

export const UIProvider = ({ children }: UIProviderProps) => {
  const [isNavigating, setIsNavigating] = useState(false)

  return (
    <UIContext.Provider
      value={{
        isNavigating,
        setIsNavigating,
      }}
    >
      {children}
    </UIContext.Provider>
  )
}

export const useUIContext = () => {
  const context = useContext(UIContext)

  if (context === null) {
    throw new Error('useUIContext must be used within a UIProvider')
  }

  return context
}
