import { Box, Container, Link, Stack, Typography } from '@mui/material'
import { siteConfig } from '../data/content'

export function FooterBar() {
  const y = new Date().getFullYear()
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        borderTop: (t) => `1px solid ${t.palette.divider}`,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ alignItems: { sm: 'center' }, justifyContent: 'space-between' }}
        >
          <Box>
            <Typography variant="body2" color="text.secondary">
              © {y} {siteConfig.name} — Software Engineer
            </Typography>
            {siteConfig.footerTagline ? (
              <Typography variant="caption" color="text.disabled" sx={{ display: 'block', mt: 0.75 }}>
                {siteConfig.footerTagline}
              </Typography>
            ) : null}
          </Box>
          <Stack direction="row" spacing={2.5} useFlexGap sx={{ flexWrap: 'wrap' }}>
            <Link href={siteConfig.github} color="text.secondary" variant="body2" target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
            <Link href={siteConfig.linkedin} color="text.secondary" variant="body2" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
            <Link href={`mailto:${siteConfig.email}`} color="text.secondary" variant="body2">
              Email
            </Link>
            <Link
              href={siteConfig.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              color="text.secondary"
              variant="body2"
            >
              Resume
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
