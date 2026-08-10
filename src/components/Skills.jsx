import { Box, Container, Grid, Typography } from '@mui/material'
import { motion } from 'framer-motion'
const MotionDiv = motion.div
import FieldLabel from './FieldLabel'
import { skills } from '../data/resumeData'

// resumeData.js stores skill group names like "core_development" (easier to type in code)
// but I want nice readable titles on the actual page, so mapping them here
const GROUP_TITLES = {
  core_development: 'Core Development',
  mainframe: 'Mainframe Platforms',
  databases: 'Databases',
  ai_engineering: 'AI Engineering',
  engineering_practices: 'Engineering Practices',
  tools: 'Tools',
}

// skills section - shows as a grid, kind of like a table with borders between each box
export default function Skills() {
  return (
    <Box id="skills" sx={{ py: { xs: 8, md: 12 }, borderTop: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <FieldLabel>skills</FieldLabel>
        <Grid container spacing={0} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: '4px', overflow: 'hidden' }}>
          {skills.map((group, idx) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={group.group}
              sx={{
                // this math just figures out whether to put a border on the right side
                // depending on how many columns are showing (2 on tablet, 3 on desktop)
                // so the outer edge doesn't get a double border
                borderRight: { sm: (idx + 1) % 2 !== 0 ? '1px solid' : 'none', md: (idx + 1) % 3 !== 0 ? '1px solid' : 'none' },
                borderTop: idx >= 1 ? { xs: '1px solid', sm: idx >= 2 ? '1px solid' : 'none', md: idx >= 3 ? '1px solid' : 'none' } : 'none',
                borderColor: 'divider',
              }}
            >
              <MotionDiv
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
              >
                <Box sx={{ p: { xs: 2.5, md: 3 }, height: '100%', bgcolor: 'background.paper' }}>
                  <Typography
                    sx={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.78rem',
                      color: 'secondary.main',
                      mb: 1.5,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {GROUP_TITLES[group.group]}
                  </Typography>
                  {/* just showing each skill as a little pill/tag */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.9 }}>
                    {group.items.map((item) => (
                      <Typography
                        key={item}
                        sx={{
                          fontSize: '0.85rem',
                          color: 'text.secondary',
                          px: 1.1,
                          py: 0.5,
                          border: '1px solid',
                          borderColor: 'divider',
                          borderRadius: '2px',
                        }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </MotionDiv>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
