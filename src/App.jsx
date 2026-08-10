// main App component - everything gets put together here
import { useMemo, useState } from 'react'
import { ThemeProvider, CssBaseline, Box } from '@mui/material'
import { buildTheme } from './theme'

// importing all the different sections of the page
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ResumeSection from './components/ResumeSection'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // keeping track of dark/light mode here so navbar and theme both know about it
  const [mode, setMode] = useState('dark')

  // useMemo so we don't rebuild the theme object on every single render
  const theme = useMemo(() => buildTheme(mode), [mode])

  // function to flip between dark and light when the button is clicked
  const handleToggleMode = () => {
    setMode((m) => (m === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline resets default browser styles so things look consistent */}
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        <Navbar mode={mode} onToggleMode={handleToggleMode} />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <ResumeSection />
        <Education />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}
