import { style } from '@vanilla-extract/css'
import { vars } from '../../theme/theme.css'

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.lg,
  padding: vars.space.xl,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.large,
  background: vars.color.surface,
  boxShadow: vars.shadow.card,
  transition: 'box-shadow 150ms ease, transform 150ms ease',
  selectors: {
    '&:hover': {
      boxShadow: vars.shadow.raised,
      transform: 'translateY(-2px)',
    },
  },
})
