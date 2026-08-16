import { useState } from 'react'
import { AppBar, Toolbar, Box, Typography, Button, IconButton, Drawer, Stack, useScrollTrigger } from '@mui/material'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

// all the nav links in one place, easier to add/remove a link later
const LINKS = [
  { label: 'about', href: '#about' },
  { label: 'experience', href: '#experience' },
  { label: 'projects', href: '#projects' },
  { label: 'skills', href: '#skills' },
  { label: 'resume', href: '#resume' },
  { label: 'achievements', href: '#achievements' },
  { label: 'contact', href: '#contact' },
]

export default function Navbar({ mode, onToggleMode }) {
  // this controls whether the mobile menu (drawer) is open or not
  const [open, setOpen] = useState(false)

  // useScrollTrigger tells us if the user scrolled down, so we can add a background
  // to the navbar (looks weird if its see-through the whole time)
  const scrolled = useScrollTrigger({ threshold: 8, disableHysteresis: true })

  // little inner component so I don't have to write the nav links twice
  // (once for desktop, once for the mobile drawer)
  const NavLinks = ({ onClick }) => (
    <>
      {LINKS.map((l) => (
        <Button
          key={l.href}
          href={l.href}
          onClick={onClick}
          sx={{
            color: 'text.secondary',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.82rem',
            letterSpacing: '0.04em',
            '&:hover': { color: 'primary.main', background: 'transparent' },
          }}
        >
          {l.label}
        </Button>
      ))}
    </>
  )

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        // only show background + border once user has scrolled a bit
        bgcolor: scrolled ? 'background.default' : 'transparent',
        borderBottom: '1px solid',
        borderColor: scrolled ? 'divider' : 'transparent',
        backdropFilter: scrolled ? 'blur(6px)' : 'none',
        transition: 'all 0.25s ease',
      }}
    >
      <Toolbar sx={{ maxWidth: 1120, width: '100%', mx: 'auto', px: { xs: 2, md: 3 } }}>
        {/* logo/name, clicking it scrolls back up to the top */}
        <Typography
          component="a"
          href="#top"
          sx={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontWeight: 600,
            fontSize: '0.95rem',
            color: 'text.primary',
            textDecoration: 'none',
            flexGrow: 1,
          }}
        >
          <Box component="span" sx={{ color: 'primary.main' }}>
            ~/
          </Box>
          ganesh-dussa
        </Typography>

        {/* desktop nav links - hidden on small screens, we use the drawer instead */}
        <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          <NavLinks />
        </Stack>

        {/* dark/light toggle button */}
        <IconButton onClick={onToggleMode} size="small" sx={{ ml: 1, color: 'text.secondary' }} aria-label="toggle color mode">
          {mode === 'dark' ? <LightModeOutlinedIcon fontSize="small" /> : <DarkModeOutlinedIcon fontSize="small" />}
        </IconButton>

        {/* hamburger icon, only shows up on mobile */}
        <IconButton
          onClick={() => setOpen(true)}
          size="small"
          sx={{ display: { xs: 'inline-flex', md: 'none' }, ml: 0.5, color: 'text.secondary' }}
          aria-label="open menu"
        >
          <MenuIcon fontSize="small" />
        </IconButton>
      </Toolbar>

      {/* mobile menu that slides in from the right */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 220, height: '100%', bgcolor: 'background.default', p: 2 }}>
          <IconButton onClick={() => setOpen(false)} size="small" sx={{ mb: 2 }}>
            <CloseIcon fontSize="small" />
          </IconButton>
          <Stack spacing={1} alignItems="flex-start">
            {/* closing the drawer when a link is clicked so it doesn't stay open */}
            <NavLinks onClick={() => setOpen(false)} />
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  )
}