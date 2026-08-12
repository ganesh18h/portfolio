import { Box, Container, Typography, Grid } from '@mui/material'
import { motion } from 'framer-motion'
const MotionDiv = motion.div
import FieldLabel from './FieldLabel'
import { education, certifications, recognition } from '../data/resumeData'

// this section is actually 3 things stacked together - education, certifications, recognition
// putting them all in one component since they're kinda related and small
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

          {/* right column - certifications on top, recognition/awards below */}
          <Grid item xs={12} md={6}>
            <FieldLabel>certifications</FieldLabel>
            <Box sx={{ mb: 4 }}>
              {certifications.map((c, idx) => (
                <Box key={c.name} sx={{ py: 1.6, borderTop: idx === 0 ? 'none' : '1px solid', borderColor: 'divider' }}>
                  {/* if this certification has a verify link (like the Anthropic Academy ones), make the name clickable */}
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

            <FieldLabel>recognition</FieldLabel>
            <Box>
              {recognition.map((r, idx) => (
                <Box key={r.title} sx={{ py: 1.6, borderTop: idx === 0 ? 'none' : '1px solid', borderColor: 'divider' }}>
                  {/* if this recognition item has a link (like my medium blog), make the title clickable */}
                  {r.url ? (
                    <Typography
                      component="a"
                      href={r.url}
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
                      {r.title}
                    </Typography>
                  ) : (
                    <Typography sx={{ fontWeight: 600, color: 'text.primary', fontSize: '0.92rem' }}>{r.title}</Typography>
                  )}
                  <Typography sx={{ fontSize: '0.82rem', color: 'text.secondary', mt: 0.3, lineHeight: 1.5 }}>{r.detail}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}