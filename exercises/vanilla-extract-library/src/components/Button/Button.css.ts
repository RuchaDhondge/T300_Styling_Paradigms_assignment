import { style, styleVariants } from '@vanilla-extract/css'
import { vars } from '../../theme/theme.css'

export const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 0,
  borderRadius: vars.radius.medium,
  fontFamily: vars.font.body,
  fontWeight: vars.font.weightSemibold,
  lineHeight: 1,
  cursor: 'pointer',
  boxShadow: vars.shadow.card,
  transition:
    'background-color 150ms ease, color 150ms ease, box-shadow 150ms ease, transform 150ms ease',
  selectors: {
    '&:focus-visible': {
      outline: `3px solid ${vars.color.focus}`,
      outlineOffset: 2,
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
      boxShadow: 'none',
    },
    '&:not(:disabled):active': {
      transform: 'translateY(1px)',
    },
  },
})

export const variants = styleVariants({
  primary: {
    background: vars.color.primary,
    color: vars.color.surface,
    selectors: {
      '&:not(:disabled):hover': {
        background: vars.color.primaryHover,
      },
    },
  },
  secondary: {
    background: vars.color.secondary,
    color: vars.color.text,
    selectors: {
      '&:not(:disabled):hover': {
        background: vars.color.secondaryHover,
      },
    },
  },
  danger: {
    background: vars.color.danger,
    color: vars.color.surface,
    selectors: {
      '&:not(:disabled):hover': {
        background: vars.color.dangerHover,
      },
    },
  },
})

export const sizes = styleVariants({
  small: {
    minHeight: 36,
    padding: `${vars.space.sm} ${vars.space.md}`,
    fontSize: vars.font.sizeSmall,
  },
  large: {
    minHeight: 44,
    padding: `${vars.space.md} ${vars.space.xl}`,
    fontSize: vars.font.sizeBody,
  },
})
