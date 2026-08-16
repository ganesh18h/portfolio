import { Box, Container, Grid, Typography } from '@mui/material'
import { motion } from 'framer-motion'
const MotionDiv = motion.div
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined'
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import FieldLabel from './FieldLabel'
import { achievements } from '../data/resumeData'

// each achievement is tagged with a `type` - this maps that to a small icon + label
// shown at the top of the card, so badges/certs/milestones are visually distinct
// even as the list grows
const TYPE_META = {
  badge: { label: 'badge', icon: WorkspacePremiumOutlinedIcon },
  certificate: { label: 'certificate', icon: VerifiedOutlinedIcon },
  milestone: { label: 'milestone', icon: FlagOutlinedIcon },
}

// achievements section - a grid of cards for badges, certificates, and milestones.
// built to scale: adding a new badge is just one object in resumeData.js,
// this component doesn't need to change as the list grows
export default function Achievements() {
  return (
    <Box id="achievements" sx={{ py: { xs: 8, md: 12 }, borderTop: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <FieldLabel>achievements</FieldLabel>
        <Grid container spacing={2.5}>
          {achievements.map((a, idx) => {
            const meta = TYPE_META[a.type] || TYPE_META.milestone
            const Icon = meta.icon
            return (
              <Grid item xs={12} sm={6} md={4} key={a.title}>
                <MotionDiv
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  style={{ height: '100%' }}
                >
                  <Box
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: '4px',
                      bgcolor: 'background.paper',
                      p: { xs: 2.25, md: 2.5 },
                      transition: 'border-color 0.15s ease',
                      '&:hover': { borderColor: a.url ? 'primary.main' : 'divider' },
                    }}
                  >
                    {/* type tag - badge / certificate / milestone */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.7, mb: 1.5 }}>
                      <Icon sx={{ fontSize: '1rem', color: 'primary.main' }} />
                      <Typography
                        sx={{
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: '0.68rem',
                          letterSpacing: '0.1em',
                          color: 'primary.main',
                          textTransform: 'uppercase',
                        }}
                      >
                        {meta.label}
                      </Typography>
                    </Box>

                    <Typography sx={{ fontWeight: 600, color: 'text.primary', fontSize: '0.98rem', lineHeight: 1.35, mb: 0.6 }}>
                      {a.title}
                    </Typography>

                    <Typography sx={{ fontSize: '0.8rem', color: 'secondary.main', mb: 1 }}>
                      {a.issuer} · {a.date}
                    </Typography>

                    <Typography sx={{ fontSize: '0.82rem', color: 'text.secondary', lineHeight: 1.55, flexGrow: 1 }}>
                      {a.detail}
                    </Typography>

                    {/* only shows if this achievement has something to link to - external credential or local PDF */}
                    {a.url && (
                      <Box
                        component="a"
                        href={a.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.5,
                          mt: 2,
                          pt: 1.5,
                          borderTop: '1px solid',
                          borderColor: 'divider',
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: '0.76rem',
                          color: 'secondary.main',
                          textDecoration: 'none',
                          width: 'fit-content',
                          '&:hover': { opacity: 0.8 },
                        }}
                      >
                        view_credential()
                        <OpenInNewIcon sx={{ fontSize: '0.85rem !important' }} />
                      </Box>
                    )}
                  </Box>
                </MotionDiv>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}