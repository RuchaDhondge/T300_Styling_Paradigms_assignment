import type { HTMLAttributes, ReactNode } from 'react'
import * as styles from './Card.css'

export interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

export function Card({ children, className, ...props }: CardProps) {
  const classes = [styles.root, className].filter(Boolean).join(' ')

  return (
    <article className={classes} {...props}>
      {children}
    </article>
  )
}
