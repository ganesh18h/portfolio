import { createTheme } from '@mui/material/styles'

// these are basically my color choices for the site
// keeping them here so its easy to change one place instead of hunting through every file
// dark mode bg = #0D1117, light mode bg = #F3F5F2 (basically off white)
// used gold and teal as accent colors instead of the usual blue everyone uses

export const getTokens = (mode) => ({
  bg: mode === 'dark' ? '#0D1117' : '#F3F5F2',
  surface: mode === 'dark' ? '#141B22' : '#FFFFFF',
  border: mode === 'dark' ? 'rgba(255,255,255,0.09)' : 'rgba(18,24,31,0.12)',
  textPrimary: mode === 'dark' ? '#E6EDF3' : '#12181F',
  textSecondary: mode === 'dark' ? '#8B98A5' : '#4B5560',
  gold: mode === 'dark' ? '#E3A008' : '#B9790A',
  teal: mode === 'dark' ? '#3FB8AF' : '#1C7C8C',
})

// this function actually builds the MUI theme object using the colors above
// gets called every time dark/light mode changes
export const buildTheme = (mode) => {
  const t = getTokens(mode)

  return createTheme({
    palette: {
      mode,
      background: { default: t.bg, paper: t.surface },
      text: { primary: t.textPrimary, secondary: t.textSecondary },
      primary: { main: t.gold },
      secondary: { main: t.teal },
      divider: t.border,
    },
    shape: { borderRadius: 3 }, // keeping corners mostly sharp, not too rounded
    typography: {
      // using IBM Plex fonts everywhere - mono for headings/labels, sans for body text
      fontFamily: "'IBM Plex Sans', sans-serif",
      h1: { fontFamily: "'IBM Plex Mono', monospace" },
      h2: { fontFamily: "'IBM Plex Mono', monospace" },
      h3: { fontFamily: "'IBM Plex Mono', monospace" },
      h4: { fontFamily: "'IBM Plex Mono', monospace" },
      button: { fontFamily: "'IBM Plex Mono', monospace", textTransform: 'none' },
    },
    custom: t, // storing the raw tokens too in case i need them somewhere directly
  })
}
