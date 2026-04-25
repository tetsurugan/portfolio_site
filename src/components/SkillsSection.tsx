import { Box, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { skillGroups, skillsSection } from '../data/content'
import { SectionTitle } from './SectionTitle'
import { elevatedSurface } from '../theme/theme'

export function SkillsSection() {
  return (
    <Box
      id="skills"
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: (t) => alpha(t.palette.background.paper, 0.35),
        borderTop: (t) => `1px solid ${t.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          eyebrow={skillsSection.eyebrow}
          title={skillsSection.title}
          subtitle={skillsSection.subtitle}
        />
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2.5} useFlexGap>
          {skillGroups.map((g) => (
            <Card
              key={g.title}
              elevation={0}
              sx={{
                flex: 1,
                minWidth: 0,
                backgroundColor: elevatedSurface,
                border: (t) => `1px solid ${alpha(t.palette.common.white, 0.06)}`,
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="subtitle1" color="primary" sx={{ mb: 2, fontWeight: 600 }}>
                  {g.title}
                </Typography>
                <Stack component="ul" spacing={1.5} sx={{ m: 0, pl: 0, listStyle: 'none' }}>
                  {g.items.map((item) => (
                    <Typography key={item} component="li" variant="body2" color="text.secondary" sx={{ pl: 2, position: 'relative', '&::before': { content: '""', position: 'absolute', left: 0, top: '0.6em', width: 5, height: 1, backgroundColor: 'primary.main', opacity: 0.5, borderRadius: 0.5 } }}>
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
