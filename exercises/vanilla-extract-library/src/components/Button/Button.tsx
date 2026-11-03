import type { ButtonHTMLAttributes, ReactNode } from 'react'
import * as styles from './Button.css'

export type ButtonVariant = keyof typeof styles.variants
export type ButtonSize = keyof typeof styles.sizes

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
}

export function Button({
  children,
  variant = 'primary',
  size = 'large',
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  const classes = [
    styles.base,
    styles.variants[variant],
    styles.sizes[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
