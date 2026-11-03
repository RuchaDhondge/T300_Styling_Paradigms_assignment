import { style, styleVariants } from '@vanilla-extract/css'
import { vars } from '../../theme/theme.css'

export const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  alignSelf: 'flex-start',
  padding: `${vars.space.xs} ${vars.space.md}`,
  borderRadius: vars.radius.pill,
  fontFamily: vars.font.body,
  fontSize: vars.font.sizeSmall,
  fontWeight: vars.font.weightSemibold,
  lineHeight: 1.4,
})

export const variants = styleVariants({
  success: {
    background: vars.color.successBackground,
    color: vars.color.successText,
  },
  warning: {
    background: vars.color.warningBackground,
    color: vars.color.warningText,
  },
  error: {
    background: vars.color.errorBackground,
    color: vars.color.errorText,
  },
})
