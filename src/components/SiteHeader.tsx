import { useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  useMediaQuery,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useTheme, alpha } from '@mui/material/styles'
import { siteConfig } from '../data/content'

const nav: { id: string; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export function SiteHeader() {
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'))
  const [open, setOpen] = useState(false)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        borderBottom: `1px solid ${alpha('#fff', 0.06)}`,
        backgroundColor: alpha(theme.palette.background.default, 0.85),
        backdropFilter: 'blur(12px)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, sm: 72 }, gap: 2 }}>
          <Button
            color="inherit"
            onClick={() => scrollTo('hero')}
            sx={{
              fontFamily: theme.typography.h6.fontFamily,
              fontWeight: 600,
              letterSpacing: '-0.02em',
              fontSize: { xs: '0.95rem', sm: '1.05rem' },
              textAlign: 'left',
            }}
          >
            {siteConfig.name}
          </Button>

          <Box sx={{ flex: 1 }} />

          {isMd ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {nav.map((item) => (
                <Button key={item.id} color="inherit" onClick={() => scrollTo(item.id)} sx={{ color: 'text.secondary' }}>
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                size="small"
                onClick={() => scrollTo('contact')}
                sx={{ ml: 1 }}
              >
                Let&apos;s talk
              </Button>
            </Box>
          ) : (
            <IconButton color="inherit" onClick={() => setOpen(true)} aria-label="Open menu">
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{ paper: { sx: { width: 280, pt: 1 } } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={() => setOpen(false)} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {nav.map((item) => (
            <ListItemButton key={item.id} onClick={() => scrollTo(item.id)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </AppBar>
  )
}
