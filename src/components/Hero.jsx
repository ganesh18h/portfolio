import { useEffect, useState } from 'react'
import { Box, Container, Typography, Stack, Button, Grid } from '@mui/material'
import { motion } from 'framer-motion'
// renaming motion.div to MotionDiv here, otherwise eslint throws an "unused var" error
// when you use it as <motion.div> directly in jsx (found this out the hard way)
const MotionDiv = motion.div
import { profile } from '../data/resumeData'

// this is the fake terminal query that types itself out in the hero section
const QUERY = `SELECT role, focus FROM engineers WHERE name = 'Ganesh Dussa';`

// small component just for the typing animation + the little "result table" after
function TypedQuery() {
  const [typed, setTyped] = useState('') // how much of the query has been "typed" so far
  const [showResult, setShowResult] = useState(false) // whether to show the result table yet

  useEffect(() => {
    let i = 0
    // setInterval to add one character every 28ms, feels like typing
    const type = setInterval(() => {
      i += 1
      setTyped(QUERY.slice(0, i))
      if (i >= QUERY.length) {
        // once the whole query is typed out, stop the interval and show the result after a short pause
        clearInterval(type)
        setTimeout(() => setShowResult(true), 350)
      }
    }, 28)

    // cleanup - important so we dont get errors if this component unmounts mid animation
    return () => clearInterval(type)
  }, [])

  return (
    <Box
      sx={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: { xs: '0.85rem', sm: '1rem' },
        color: 'text.secondary',
        lineHeight: 1.9,
      }}
    >
      <Box component="span" sx={{ color: 'secondary.main' }}>
        ganesh@portfolio
      </Box>
      <Box component="span" sx={{ color: 'text.secondary' }}>
        :~$
      </Box>{' '}
      <Box component="span" sx={{ color: 'text.primary' }}>
        {typed}
      </Box>
      {/* blinking cursor, made with a css animation */}
      <Box
        component="span"
        sx={{
          display: 'inline-block',
          width: '0.55em',
          height: '1.1em',
          bgcolor: 'primary.main',
          ml: 0.5,
          verticalAlign: 'text-bottom',
          animation: 'blink 1s steps(1) infinite',
          '@keyframes blink': { '50%': { opacity: 0 } },
        }}
      />
      {/* only show this part once the query has finished typing */}
      {showResult && (
        <MotionDiv initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <Box
            sx={{
              mt: 2,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: '2px',
              overflow: 'hidden',
            }}
          >
            {/* fake table header row */}
            <Box sx={{ display: 'flex', bgcolor: 'background.paper' }}>
              {['role', 'focus'].map((h) => (
                <Box
                  key={h}
                  sx={{
                    flex: 1,
                    px: 1.5,
                    py: 0.75,
                    color: 'secondary.main',
                    borderRight: h === 'role' ? '1px solid' : 'none',
                    borderColor: 'divider',
                    fontSize: '0.78rem',
                  }}
                >
                  {h}
                </Box>
              ))}
            </Box>
            {/* fake table row with the actual data - this is where the ?focus= override shows up */}
            <Box sx={{ display: 'flex', borderTop: '1px solid', borderColor: 'divider' }}>
              <Box
                sx={{
                  flex: 1,
                  px: 1.5,
                  py: 0.9,
                  color: 'text.primary',
                  borderRight: '1px solid',
                  borderColor: 'divider',
                  fontSize: '0.85rem',
                }}
              >
                {profile.role}
              </Box>
              <Box sx={{ flex: 1, px: 1.5, py: 0.9, color: 'text.primary', fontSize: '0.85rem' }}>{profile.focus}</Box>
            </Box>
          </Box>
          <Typography sx={{ mt: 1, fontSize: '0.78rem', color: 'text.secondary' }}>1 row returned</Typography>
        </MotionDiv>
      )}
    </Box>
  )
}

// this is the actual hero section that gets used in App.jsx
export default function Hero() {
  return (
    <Box id="top" sx={{ pt: { xs: 16, md: 20 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 4 }} alignItems="center">
          {/* left side - name, summary, buttons */}
          <Grid item xs={12} md={7}>
            <MotionDiv initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Typography
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.8rem',
                  letterSpacing: '0.14em',
                  color: 'secondary.main',
                  mb: 2,
                }}
              >
                {profile.location.toUpperCase()} · OPEN TO OPPORTUNITIES
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.4rem', sm: '3.2rem', md: '3.6rem' },
                  fontWeight: 600,
                  color: 'text.primary',
                  lineHeight: 1.08,
                  mb: 2,
                }}
              >
                {profile.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '1.05rem', md: '1.2rem' },
                  color: 'text.secondary',
                  maxWidth: 560,
                  mb: 4,
                  lineHeight: 1.65,
                }}
              >
                {profile.shortSummary}
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mb: { xs: 6, md: 0 }, flexWrap: 'wrap', gap: 1 }}>
                {/* scrolls down to projects section */}
                <Button
                  href="#projects"
                  variant="contained"
                  sx={{
                    bgcolor: 'primary.main',
                    color: '#0D1117',
                    px: 3,
                    '&:hover': { bgcolor: 'primary.main', opacity: 0.85 },
                  }}
                >
                  view_projects()
                </Button>
                {/* opens the default mail app with my email pre filled */}
                <Button
                  href={`mailto:${profile.email}`}
                  variant="outlined"
                  sx={{ borderColor: 'divider', color: 'text.primary', px: 3, '&:hover': { borderColor: 'secondary.main' } }}
                >
                  get_in_touch()
                </Button>
              </Stack>
            </MotionDiv>
          </Grid>

          {/* right side - the fake terminal box */}
          <Grid item xs={12} md={5}>
            <MotionDiv initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
              <Box
                sx={{
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: '4px',
                  p: { xs: 2.5, md: 3 },
                }}
              >
                <TypedQuery />
              </Box>
            </MotionDiv>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}