import { createTheme, alpha } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    accent: { subtle: string; border: string; glow: string }
  }
  interface PaletteOptions {
    accent?: { subtle: string; border: string; glow: string }
  }
}

/** Surfaces slightly above `paper` — use in cards/hero */
export const elevatedSurface = '#18181b'

/* Custom dark palette: restrained accent, not default MUI blue */
export const portfolioTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#5eb8b0', light: '#7dd0c8', dark: '#3d8a84', contrastText: '#0a0a0b' },
    secondary: { main: '#9ca3af', light: '#d1d5db', dark: '#6b7280' },
    background: { default: '#0a0a0c', paper: '#121214' },
    text: { primary: '#f4f4f5', secondary: '#a1a1aa' },
    divider: alpha('#fff', 0.08),
    accent: {
      subtle: alpha('#5eb8b0', 0.12),
      border: alpha('#5eb8b0', 0.35),
      glow: alpha('#5eb8b0', 0.2),
    },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: '"Inter", "system-ui", "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Outfit", "Inter", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1.12,
    },
    h2: {
      fontFamily: '"Outfit", "Inter", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: '"Outfit", "Inter", sans-serif',
      fontWeight: 600,
    },
    h4: { fontFamily: '"Outfit", "Inter", sans-serif', fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    subtitle1: { lineHeight: 1.6 },
    body1: { lineHeight: 1.75 },
    body2: { lineHeight: 1.7 },
    button: { fontWeight: 600, letterSpacing: '0.02em' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { scrollBehavior: 'smooth' },
        '::selection': { backgroundColor: alpha('#5eb8b0', 0.35) },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { textTransform: 'none', borderRadius: 10, padding: '10px 22px' },
        sizeLarge: { padding: '12px 28px', fontSize: '1rem' },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: `1px solid ${alpha('#fff', 0.06)}`,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 500, borderRadius: 8 },
        filled: { backgroundColor: alpha('#5eb8b0', 0.15), color: '#b8e8e2' },
      },
    },
    MuiLink: { defaultProps: { underline: 'hover' } },
  },
})
