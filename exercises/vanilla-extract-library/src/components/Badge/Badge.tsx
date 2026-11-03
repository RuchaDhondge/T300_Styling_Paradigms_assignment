import type { HTMLAttributes, ReactNode } from 'react'
import * as styles from './Badge.css'

export type BadgeVariant = keyof typeof styles.variants

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  variant?: BadgeVariant
}

export function Badge({
  children,
  variant = 'success',
  className,
  ...props
}: BadgeProps) {
  const classes = [styles.base, styles.variants[variant], className]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}
