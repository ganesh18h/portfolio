import { Box, Typography } from '@mui/material'

// small helper component - just prints a little label like "// about" before each section
// did this because I use the same label style in like 6 different sections
// so instead of copy pasting the same styles everywhere I made this once
export default function FieldLabel({ children, sx = {} }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        mb: 2,
        ...sx,
      }}
    >
      {/* the // just makes it look like a code comment, matches the theme of the site */}
      <Typography
        component="span"
        sx={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '0.78rem',
          letterSpacing: '0.14em',
          color: 'secondary.main',
        }}
      >
        //
      </Typography>
      <Typography
        component="span"
        sx={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '0.78rem',
          letterSpacing: '0.14em',
          color: 'text.secondary',
          textTransform: 'uppercase',
        }}
      >
        {children}
      </Typography>
    </Box>
  )
}
