import { globalStyle, style } from '@vanilla-extract/css'
import { breakpoints, vars } from './theme/theme.css'

globalStyle('*', {
  boxSizing: 'border-box',
})

globalStyle('body', {
  margin: 0,
  minWidth: 320,
  minHeight: '100vh',
})

export const page = style({
  minHeight: '100vh',
  padding: vars.space.lg,
  background: vars.color.canvas,
  color: vars.color.text,
  fontFamily: vars.font.body,
  fontSize: vars.font.sizeBody,
  '@media': {
    [breakpoints.tablet]: {
      padding: vars.space['2xl'],
    },
  },
})

export const panel = style({
  maxWidth: 1120,
  margin: '0 auto',
  padding: vars.space.xl,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.large,
  background: vars.color.surface,
  boxShadow: vars.shadow.card,
})

export const eyebrow = style({
  margin: 0,
  color: vars.color.primary,
  fontSize: vars.font.sizeSmall,
  fontWeight: vars.font.weightBold,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
})

export const title = style({
  margin: `${vars.space.sm} 0 0`,
  fontSize: vars.font.sizeTitle,
  fontWeight: vars.font.weightBold,
  lineHeight: 1.2,
})

export const description = style({
  margin: `${vars.space.sm} 0 0`,
  color: vars.color.textMuted,
  lineHeight: 1.6,
})

export const section = style({
  marginTop: vars.space['2xl'],
})

export const sectionTitle = style({
  margin: 0,
  fontSize: '20px',
  fontWeight: vars.font.weightBold,
})

export const sectionDescription = style({
  margin: `${vars.space.xs} 0 0`,
  color: vars.color.textMuted,
  fontSize: vars.font.sizeSmall,
})

export const componentRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: vars.space.md,
  marginTop: vars.space.lg,
})
