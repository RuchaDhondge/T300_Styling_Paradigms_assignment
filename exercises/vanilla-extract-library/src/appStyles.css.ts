import { globalStyle, style } from '@vanilla-extract/css'

globalStyle('*', {
  boxSizing: 'border-box',
})

globalStyle('body', {
  margin: 0,
  minWidth: 320,
  minHeight: '100vh',
  background: '#f8fafc',
  color: '#0f172a',
  fontFamily:
    'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
})

export const page = style({
  minHeight: '100vh',
  padding: 24,
})

export const panel = style({
  maxWidth: 1120,
  margin: '0 auto',
  padding: 24,
  border: '1px solid #e2e8f0',
  borderRadius: 12,
  background: '#ffffff',
  boxShadow: '0 1px 3px rgb(15 23 42 / 0.1)',
})

export const eyebrow = style({
  margin: 0,
  color: '#4f46e5',
  fontSize: 14,
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
})

export const title = style({
  margin: '8px 0 0',
  fontSize: 32,
  lineHeight: 1.2,
})

export const description = style({
  margin: '8px 0 0',
  color: '#64748b',
  lineHeight: 1.6,
})
