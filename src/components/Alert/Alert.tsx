import React, { ReactNode } from 'react'
import clsx from 'clsx'

import styles from './Alert.module.css'

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  alertType: 'success' | 'error' | 'warning'
}

const Alert = ({ className, children, alertType, ...props }: AlertProps) => {
  return (
    <div className={clsx(className, styles[alertType], styles.container)} {...props}>
      {children}
    </div>
  )
}

export default Alert
