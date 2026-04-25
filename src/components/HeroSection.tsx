import { Box, Button, Container, Stack, Typography } from '@mui/material'
import SouthIcon from '@mui/icons-material/South'
import { alpha, keyframes, useTheme } from '@mui/material/styles'
import { siteConfig } from '../data/content'
import { elevatedSurface } from '../theme/theme'

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`

type Props = {
  onDownloadResume: () => void
}

export function HeroSection({ onDownloadResume }: Props) {
  const theme = useTheme()
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Box
      id="hero"
      component="section"
      sx={{
        position: 'relative',
        minHeight: 'min(92vh, 880px)',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 2, md: 4 },
        pb: { xs: 8, md: 12 },
        overflow: 'hidden',
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse 80% 50% at 20% 10%, ${alpha(theme.palette.primary.main, 0.14)} 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 80% 60%, ${alpha('#6366f1', 0.08)} 0%, transparent 50%)`,
          pointerEvents: 'none',
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: '12%',
          right: '-5%',
          width: 420,
          height: 420,
          borderRadius: '50%',
          border: `1px solid ${alpha('#fff', 0.04)}`,
          background: `linear-gradient(135deg, ${alpha(elevatedSurface, 0.4)} 0%, transparent 60%)`,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={{ xs: 3, md: 4 }} sx={{ maxWidth: 880 }}>
          <Typography
            variant="overline"
            sx={{ color: 'text.secondary', letterSpacing: '0.12em', fontWeight: 600 }}
          >
            Web · Internal tools · Interactive systems
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.25rem', md: '3.75rem' },
              fontWeight: 600,
            }}
          >
            {siteConfig.name}
            <Box
              component="span"
              sx={{ display: 'block', color: 'text.secondary', fontSize: '0.4em', mt: 1.5, fontWeight: 500, lineHeight: 1.35 }}
            >
              {siteConfig.title}
            </Box>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontWeight: 500, maxWidth: 640, lineHeight: 1.65, letterSpacing: '0.01em' }}
          >
            {siteConfig.supportingLine}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, maxWidth: 640, lineHeight: 1.65 }}>
            {siteConfig.heroBlurb}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} useFlexGap sx={{ pt: 1 }}>
            <Button variant="contained" size="large" onClick={() => scrollTo('projects')}>
              View Projects
            </Button>
            <Button variant="outlined" size="large" onClick={() => scrollTo('contact')}>
              Contact
            </Button>
            <Button
              size="large"
              onClick={onDownloadResume}
              sx={{
                color: 'text.primary',
                border: `1px solid ${alpha('#fff', 0.12)}`,
                '&:hover': { borderColor: alpha(theme.palette.primary.main, 0.5), backgroundColor: alpha(theme.palette.primary.main, 0.06) },
              }}
            >
              Download Resume
            </Button>
          </Stack>
        </Stack>

        <Button
          color="inherit"
          onClick={() => scrollTo('about')}
          sx={{
            mt: { xs: 8, md: 10 },
            color: 'text.secondary',
            animation: `${float} 3s ease-in-out infinite`,
          }}
          startIcon={<SouthIcon sx={{ fontSize: 20 }} />}
        >
          Scroll
        </Button>
      </Container>
    </Box>
  )
}
