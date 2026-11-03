import { createTheme } from '@vanilla-extract/css'

export const [themeClass, vars] = createTheme({
  color: {
    primary: '#4f46e5',
    primaryHover: '#4338ca',
    secondary: '#e2e8f0',
    secondaryHover: '#cbd5e1',
    danger: '#dc2626',
    dangerHover: '#b91c1c',
    canvas: '#f8fafc',
    surface: '#ffffff',
    text: '#0f172a',
    textMuted: '#64748b',
    border: '#e2e8f0',
    focus: '#818cf8',
    successBackground: '#dcfce7',
    successText: '#166534',
    warningBackground: '#fef3c7',
    warningText: '#92400e',
    errorBackground: '#fee2e2',
    errorText: '#991b1b',
  },
  space: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '32px',
    '3xl': '48px',
  },
  font: {
    body:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    sizeSmall: '14px',
    sizeBody: '16px',
    sizeTitle: '32px',
    weightRegular: '400',
    weightMedium: '500',
    weightSemibold: '600',
    weightBold: '700',
  },
  radius: {
    small: '6px',
    medium: '10px',
    large: '16px',
    pill: '9999px',
  },
  shadow: {
    card: '0 1px 3px rgb(15 23 42 / 0.1), 0 1px 2px -1px rgb(15 23 42 / 0.1)',
    raised:
      '0 10px 15px -3px rgb(15 23 42 / 0.1), 0 4px 6px -4px rgb(15 23 42 / 0.1)',
  },
})

export const breakpoints = {
  tablet: 'screen and (min-width: 48rem)',
  desktop: 'screen and (min-width: 64rem)',
} as const
