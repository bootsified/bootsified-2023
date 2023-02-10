import { forwardRef } from 'react'
import clsx from 'clsx'

import styles from './Button.module.css'

export const BUTTON_VARIANTS = {
  default: styles.default,
  bold: styles.bold,
  reverse: styles.reverse,
  primary: styles.primary,
  secondary: styles.secondary,
  tertiary: styles.tertiary,
  quaternary: styles.quaternary,
  text: styles.text,
  smallText: styles.smallText,
  giftNow: styles.giftNow,
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  compact?: boolean
  noShrink?: boolean
  variant?: keyof typeof BUTTON_VARIANTS
  href?: string
}

export type ButtonRef = HTMLButtonElement | HTMLAnchorElement

const Button = forwardRef<ButtonRef, ButtonProps>(function Button(
  { className, compact = false, noShrink = false, variant = 'default', ...props },
  ref
) {
  if (!BUTTON_VARIANTS[variant]) {
    throw new Error(
      `Invalid Button variant: ${variant}\nMust be one of ${Object.keys(BUTTON_VARIANTS).join(
        ', '
      )}`
    )
  }

  const Element = props.href ? 'a' : 'button'

  return (
    <Element
      className={clsx(
        styles.button,
        BUTTON_VARIANTS[variant],
        compact ? styles.compact : '',
        noShrink ? styles.noShrink : '',
        className
      )}
      // @ts-ignore because polymorphic typing is complex
      ref={ref}
      {...props}
    />
  )
})

export default Button
