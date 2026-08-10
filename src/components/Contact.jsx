import { Box, Container, Typography, Stack, Button } from '@mui/material'
import { motion } from 'framer-motion'
const MotionDiv = motion.div
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import FieldLabel from './FieldLabel'
import { profile } from '../data/resumeData'

// contact section at the end - basically just a bunch of buttons that open
// email/phone/linkedin/github/blog. nothing complicated here
export default function Contact() {
  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 12 }, borderTop: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <FieldLabel>contact</FieldLabel>
        <MotionDiv initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <Typography
            sx={{
              fontSize: { xs: '1.6rem', md: '2.2rem' },
              fontWeight: 600,
              color: 'text.primary',
              maxWidth: 640,
              lineHeight: 1.25,
              mb: 4,
            }}
          >
            Open to Software Engineer roles — let's talk about what you're building.
          </Typography>

          {/* stacks vertically on mobile, horizontal row on bigger screens */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ flexWrap: 'wrap' }}>
            {/* mailto: link opens the default mail app with my email already filled in */}
            <Button
              href={`mailto:${profile.email}`}
              variant="contained"
              startIcon={<EmailOutlinedIcon />}
              sx={{ bgcolor: 'primary.main', color: '#0D1117', px: 3, '&:hover': { bgcolor: 'primary.main', opacity: 0.85 } }}
            >
              {profile.email}
            </Button>
            {/* tel: link, removing spaces from the phone number since some phones dont like spaces in this */}
            <Button
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              variant="outlined"
              startIcon={<PhoneOutlinedIcon />}
              sx={{ borderColor: 'divider', color: 'text.primary', '&:hover': { borderColor: 'secondary.main' } }}
            >
              {profile.phone}
            </Button>
            <Button
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              startIcon={<LinkedInIcon />}
              sx={{ borderColor: 'divider', color: 'text.primary', '&:hover': { borderColor: 'secondary.main' } }}
            >
              LinkedIn
            </Button>
            <Button
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              startIcon={<GitHubIcon />}
              sx={{ borderColor: 'divider', color: 'text.primary', '&:hover': { borderColor: 'secondary.main' } }}
            >
              GitHub
            </Button>
            {/* my medium blog link */}
            <Button
              href={profile.blog}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              startIcon={<MenuBookOutlinedIcon />}
              sx={{ borderColor: 'divider', color: 'text.primary', '&:hover': { borderColor: 'secondary.main' } }}
            >
              Blog
            </Button>
          </Stack>
        </MotionDiv>
      </Container>
    </Box>
  )
}
