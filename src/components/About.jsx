import { Box, Container, Grid, Typography } from '@mui/material'
import { motion } from 'framer-motion'
// renamed to MotionDiv so eslint doesnt complain about "unused" import when used in jsx
const MotionDiv = motion.div
import FieldLabel from './FieldLabel'
import { profile } from '../data/resumeData'

// about section - just the summary paragraph + a little stats box on the side
export default function About() {
  return (
    <Box id="about" sx={{ py: { xs: 8, md: 12 }, borderTop: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <FieldLabel>about</FieldLabel>
        <Grid container spacing={6}>
          {/* left side - the summary text, fades in when it scrolls into view */}
          <Grid item xs={12} md={7}>
            <MotionDiv initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, color: 'text.secondary', lineHeight: 1.8 }}>
                {profile.summary}
              </Typography>
            </MotionDiv>
          </Grid>

          {/* right side - quick stats, just looping over the array from resumeData.js */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              {profile.stats.map((s, i) => (
                <Box
                  key={s.label}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    px: 2,
                    py: 1.4,
                    // no border on the very first row, only between rows
                    borderTop: i === 0 ? 'none' : '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.75rem',
                      letterSpacing: '0.06em',
                      color: 'text.secondary',
                    }}
                  >
                    {s.label}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.85rem',
                      color: 'secondary.main',
                      fontWeight: 600,
                    }}
                  >
                    {s.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
