import { useCallback, useEffect } from 'react'
import { ThemeProvider, CssBaseline, Box } from '@mui/material'
import { portfolioTheme } from './theme/theme'
import { siteConfig } from './data/content'
import { SiteHeader } from './components/SiteHeader'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'
import { ResumeSection } from './components/ResumeSection'
import { ContactSection } from './components/ContactSection'
import { FooterBar } from './components/FooterBar'

function App() {
  useEffect(() => {
    document.title = siteConfig.siteTitle
  }, [])

  const openResume = useCallback(() => {
    // Same file as in siteConfig — add PDF under public/ and name in siteConfig.resumePdfUrl
    window.open(siteConfig.resumePdfUrl, '_blank', 'noopener,noreferrer')
  }, [])

  return (
    <ThemeProvider theme={portfolioTheme}>
      <CssBaseline enableColorScheme />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <SiteHeader />
        <Box component="main" sx={{ flex: 1 }}>
          <HeroSection onDownloadResume={openResume} />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ResumeSection onDownload={openResume} />
          <ContactSection />
        </Box>
        <FooterBar />
      </Box>
    </ThemeProvider>
  )
}

export default App
