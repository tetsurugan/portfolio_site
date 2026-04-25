import { Box, Container, Stack, Typography } from '@mui/material'
import { aboutParagraphs, aboutSection, goldToothCoderShort } from '../data/content'
import { SectionTitle } from './SectionTitle'
import { alpha } from '@mui/material/styles'

export function AboutSection() {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: (t) => alpha(t.palette.background.paper, 0.5),
        borderTop: (t) => `1px solid ${alpha(t.palette.divider, 1)}`,
        borderBottom: (t) => `1px solid ${alpha(t.palette.divider, 1)}`,
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          eyebrow={aboutSection.eyebrow}
          title={aboutSection.title}
          subtitle={aboutSection.subtitle}
        />
        <Stack spacing={3} sx={{ maxWidth: 720 }}>
          {aboutParagraphs.map((p, i) => {
            const isGold = p === goldToothCoderShort
            return (
              <Typography
                key={i}
                variant="body1"
                color="text.secondary"
                sx={
                  isGold
                    ? {
                        pl: 2,
                        borderLeft: (t) => `3px solid ${alpha(t.palette.primary.main, 0.35)}`,
                        fontSize: '0.95rem',
                        fontStyle: 'italic',
                        color: 'text.disabled',
                      }
                    : undefined
                }
              >
                {p}
              </Typography>
            )
          })}
        </Stack>
      </Container>
    </Box>
  )
}
