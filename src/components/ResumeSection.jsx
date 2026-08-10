import { Box, Container, Typography } from '@mui/material'
import { motion } from 'framer-motion'
const MotionDiv = motion.div
import FieldLabel from './FieldLabel'
import { resumeBuilds } from '../data/resumeData'

// this whole section is a joke dressed up as a feature - it pretends to be a
// terminal listing files in a "resumes/" folder, like running `ls -la`.
// each "file" is a real <a download> link under the hood, so it still works
// exactly like a normal download button, just styled to match the rest of
// the site's terminal theme instead of being a plain <Button>
export default function ResumeSection() {
  return (
    <Box id="resume" sx={{ py: { xs: 8, md: 12 }, borderTop: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <FieldLabel>resume</FieldLabel>

        <MotionDiv initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <Box
            sx={{
              bgcolor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: '4px',
              p: { xs: 2.5, md: 3 },
              fontFamily: "'IBM Plex Mono', monospace",
              maxWidth: 640,
            }}
          >
            {/* the fake command being "run" */}
            <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem' }, mb: 2 }}>
              <Box component="span" sx={{ color: 'secondary.main' }}>
                ganesh@portfolio
              </Box>
              <Box component="span" sx={{ color: 'text.secondary' }}>
                :~$
              </Box>{' '}
              <Box component="span" sx={{ color: 'text.primary' }}>
                ls -la resumes/
              </Box>
            </Typography>

            {/* the "file listing" - two real download links styled like terminal output */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 2 }}>
              {resumeBuilds.map((build) => (
                <Box
                  key={build.id}
                  component="a"
                  href={`${import.meta.env.BASE_URL}${build.filename}`}
                  download
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    gap: { xs: 0.3, sm: 1.5 },
                    textDecoration: 'none',
                    px: 1.5,
                    py: 1,
                    borderRadius: '2px',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'border-color 0.15s ease, background 0.15s ease',
                    '&:hover': { borderColor: 'primary.main', bgcolor: 'action.hover' },
                  }}
                >
                  <Typography
                    sx={{ fontSize: '0.85rem', color: 'primary.main', fontWeight: 600, whiteSpace: 'nowrap' }}
                  >
                    {build.filename}
                  </Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: 'secondary.main', whiteSpace: 'nowrap' }}>
                    {build.tag}
                  </Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', whiteSpace: 'nowrap' }}>
                    {build.stack}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* closing line, just for flavor - the cursor from the hero terminal shows up here too */}
            <Typography sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem' }, color: 'text.secondary' }}>
              <Box component="span" sx={{ color: 'secondary.main' }}>
                ganesh@portfolio
              </Box>
              <Box component="span">:~$</Box>{' '}
              <Box
                component="span"
                sx={{
                  display: 'inline-block',
                  width: '0.55em',
                  height: '1.1em',
                  bgcolor: 'primary.main',
                  verticalAlign: 'text-bottom',
                  animation: 'blink 1s steps(1) infinite',
                  '@keyframes blink': { '50%': { opacity: 0 } },
                }}
              />
            </Typography>
          </Box>
        </MotionDiv>
      </Container>
    </Box>
  )
}