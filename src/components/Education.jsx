import { Box, Container, Typography, Grid } from '@mui/material'
import { motion } from 'framer-motion'
const MotionDiv = motion.div
import FieldLabel from './FieldLabel'
import { education, certifications } from '../data/resumeData'

// this section is education + certifications side by side.
// (badges/credentials/milestones used to live here too, but now have their
// own scalable card grid in Achievements.jsx)
export default function Education() {
  return (
    <Box id="education" sx={{ py: { xs: 8, md: 12 }, borderTop: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* left column - education history */}
          <Grid item xs={12} md={6}>
            <FieldLabel>education</FieldLabel>
            <Box>
              {education.map((e, idx) => (
                <MotionDiv
                  key={e.school}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                >
                  <Box sx={{ py: 2, borderTop: idx === 0 ? 'none' : '1px solid', borderColor: 'divider' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 1 }}>
                      <Typography sx={{ fontWeight: 600, color: 'text.primary', fontSize: '1rem' }}>{e.school}</Typography>
                      <Typography sx={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', color: 'text.secondary' }}>
                        {e.period}
                      </Typography>
                    </Box>
                    <Typography sx={{ fontSize: '0.9rem', color: 'secondary.main', mt: 0.3 }}>{e.degree}</Typography>
                    <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary', mt: 0.3 }}>
                      {e.location} · {e.detail}
                    </Typography>
                  </Box>
                </MotionDiv>
              ))}
            </Box>
          </Grid>

          {/* right column - certifications */}
          <Grid item xs={12} md={6}>
            <FieldLabel>certifications</FieldLabel>
            <Box>
              {certifications.map((c, idx) => (
                <Box key={c.name} sx={{ py: 1.6, borderTop: idx === 0 ? 'none' : '1px solid', borderColor: 'divider' }}>
                  {/* if this certification has a verify link, make the name clickable */}
                  {c.url ? (
                    <Typography
                      component="a"
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        fontWeight: 600,
                        color: 'secondary.main',
                        fontSize: '0.92rem',
                        textDecoration: 'none',
                        '&:hover': { textDecoration: 'underline' },
                      }}
                    >
                      {c.name}
                    </Typography>
                  ) : (
                    <Typography sx={{ fontWeight: 600, color: 'text.primary', fontSize: '0.92rem' }}>{c.name}</Typography>
                  )}
                  <Typography sx={{ fontSize: '0.8rem', color: 'secondary.main', mt: 0.2 }}>{c.issuer}</Typography>
                  <Typography sx={{ fontSize: '0.82rem', color: 'text.secondary', mt: 0.3, lineHeight: 1.5 }}>{c.detail}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}