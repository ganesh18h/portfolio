import { Box, Container, Typography } from '@mui/material'
import { profile } from '../data/resumeData'

// footer at the bottom of the page, nothing fancy here
export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: '1px solid', borderColor: 'divider', py: 3 }}>
      <Container
        maxWidth="lg"
        sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'space-between', alignItems: 'center' }}
      >
        {/* new Date().getFullYear() so I dont have to manually update the year every year lol */}
        <Typography sx={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', color: 'text.secondary' }}>
          © {new Date().getFullYear()} {profile.name}
        </Typography>
        <Typography sx={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', color: 'text.secondary' }}>
          built_with(react, mui, framer-motion)
        </Typography>
      </Container>
    </Box>
  )
}
