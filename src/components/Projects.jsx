import { Box, Container, Typography, Grid, Chip, Button } from '@mui/material'
import { motion } from 'framer-motion'
const MotionDiv = motion.div
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import FieldLabel from './FieldLabel'
import { projects } from '../data/resumeData'

// projects section - shows each project as its own card with a tech stack + optional live link
export default function Projects() {
  return (
    <Box id="projects" sx={{ py: { xs: 8, md: 12 }, borderTop: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <FieldLabel>projects</FieldLabel>
        <Grid container spacing={3}>
          {projects.map((p, idx) => (
            <Grid item xs={12} md={6} key={p.name}>
              <MotionDiv
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                style={{ height: '100%' }}
              >
                <Box
                  sx={{
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: '4px',
                    bgcolor: 'background.paper',
                    p: { xs: 2.5, md: 3 },
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* project_01, project_02 etc - just for the terminal/code look */}
                  <Typography
                    sx={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.72rem',
                      color: 'text.secondary',
                      mb: 1,
                    }}
                  >
                    project_{String(idx + 1).padStart(2, '0')}
                  </Typography>
                  <Typography sx={{ fontSize: '1.25rem', fontWeight: 600, color: 'text.primary', mb: 0.5 }}>{p.name}</Typography>
                  <Typography sx={{ fontSize: '0.92rem', color: 'secondary.main', mb: 2 }}>{p.tagline}</Typography>

                  {/* flexGrow: 1 so this pushes the tech stack + button to the bottom of the card */}
                  <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none', flexGrow: 1 }}>
                    {p.bullets.map((b) => (
                      <Box
                        component="li"
                        key={b}
                        sx={{
                          display: 'flex',
                          gap: 1.2,
                          mb: 1.2,
                          fontSize: '0.9rem',
                          color: 'text.secondary',
                          lineHeight: 1.6,
                        }}
                      >
                        <Box component="span" sx={{ color: 'primary.main', fontFamily: "'IBM Plex Mono', monospace" }}>
                          ›
                        </Box>
                        {b}
                      </Box>
                    ))}
                  </Box>

                  {/* tech stack tags at the bottom of the card */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mt: 2.5, pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
                    {p.stack.map((s) => (
                      <Chip
                        key={s}
                        label={s}
                        size="small"
                        sx={{
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: '0.68rem',
                          bgcolor: 'transparent',
                          border: '1px solid',
                          borderColor: 'divider',
                          color: 'text.secondary',
                          borderRadius: '2px',
                        }}
                      />
                    ))}
                  </Box>

                  {/* only show this button if the project actually has a live link (see resumeData.js) */}
                  {p.url && (
                    <Button
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={<OpenInNewIcon sx={{ fontSize: '0.9rem !important' }} />}
                      sx={{
                        mt: 2,
                        alignSelf: 'flex-start',
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '0.78rem',
                        color: 'secondary.main',
                        px: 0,
                        '&:hover': { background: 'transparent', opacity: 0.8 },
                      }}
                    >
                      view_live()
                    </Button>
                  )}
                </Box>
              </MotionDiv>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
