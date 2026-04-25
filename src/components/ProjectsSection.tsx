import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import DescriptionIcon from '@mui/icons-material/Description'
import { alpha } from '@mui/material/styles'
import { projects, projectsSection, type Project, type ProjectLink } from '../data/content'
import { SectionTitle } from './SectionTitle'
import { ProjectImagePlaceholder } from './ProjectImagePlaceholder'
import { elevatedSurface } from '../theme/theme'

function linkIcon(v: ProjectLink['variant']) {
  if (v === 'github') return <GitHubIcon sx={{ fontSize: 18 }} />
  if (v === 'live') return <LaunchIcon sx={{ fontSize: 18 }} />
  return <DescriptionIcon sx={{ fontSize: 18 }} />
}

function FeaturedPov({ project }: { project: Project }) {
  return (
    <Card
      elevation={0}
      sx={{
        overflow: 'hidden',
        backgroundColor: elevatedSurface,
        border: (t) => `1px solid ${alpha(t.palette.primary.main, 0.25)}`,
        boxShadow: (t) => `0 0 0 1px ${alpha(t.palette.primary.main, 0.08)}, 0 24px 64px -24px ${alpha('#000', 0.5)}`,
        transition: 'transform 0.35s ease, box-shadow 0.35s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: (t) => `0 0 0 1px ${alpha(t.palette.primary.main, 0.2)}, 0 32px 80px -28px ${alpha('#000', 0.6)}`,
        },
      }}
    >
      <Grid container>
        <Grid size={{ xs: 12, md: 5.5 }} sx={{ minHeight: { xs: 240, md: 420 } }}>
          <Box sx={{ height: '100%', minHeight: { xs: 220, md: '100%' } }}>
            <ProjectImagePlaceholder label={project.title} image={project.image} />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6.5 }}>
          <CardContent sx={{ p: { xs: 3, md: 4 }, height: '100%' }}>
            <Stack spacing={2.5}>
              <Box>
                <Chip label="Featured" size="small" color="primary" variant="outlined" sx={{ mb: 1.5 }} />
                <Typography variant="h4" component="h3" sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' } }}>
                  {project.title}
                </Typography>
                <Typography variant="subtitle2" color="primary" sx={{ mt: 0.5, fontWeight: 600, letterSpacing: 0.3 }}>
                  {project.subtitle}
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                {project.description}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                {project.tech.map((t) => (
                  <Chip key={t} label={t} size="small" />
                ))}
              </Box>
              <Stack component="ul" spacing={1} sx={{ m: 0, pl: 2.5, color: 'text.secondary' }}>
                {project.features.map((f) => (
                  <Typography key={f} component="li" variant="body2" sx={{ pl: 0.5 }}>
                    {f}
                  </Typography>
                ))}
              </Stack>
              <Stack direction="row" spacing={1.5} useFlexGap sx={{ flexWrap: 'wrap', pt: 1 }}>
                {project.links.map((l) => (
                  <Button
                    key={l.label}
                    component="a"
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    variant={l.variant === 'live' ? 'contained' : 'outlined'}
                    size="medium"
                    startIcon={l.variant ? linkIcon(l.variant) : undefined}
                  >
                    {l.label}
                  </Button>
                ))}
              </Stack>
            </Stack>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: (t) => alpha(t.palette.background.paper, 0.8),
        transition: 'transform 0.25s ease, border-color 0.25s ease',
        '&:hover': {
          transform: 'translateY(-3px)',
          borderColor: (t) => alpha(t.palette.primary.main, 0.35),
        },
      }}
    >
      <Box sx={{ height: 160, overflow: 'hidden' }}>
        <ProjectImagePlaceholder label={project.title} image={project.image} />
      </Box>
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
        <Typography variant="h6" component="h3" sx={{ fontSize: '1.1rem' }}>
          {project.title}
        </Typography>
        <Typography variant="caption" color="primary" sx={{ display: 'block', mt: 0.75, fontWeight: 600, letterSpacing: 0.2, lineHeight: 1.4 }}>
          {project.subtitle}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, flex: 1, lineHeight: 1.65 }}>
          {project.description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
          {project.tech.slice(0, 4).map((t) => (
            <Chip key={t} label={t} size="small" variant="outlined" sx={{ borderColor: 'divider' }} />
          ))}
        </Box>
        <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', mt: 2.5 }}>
          {project.links.map((l) => (
            <Button
              key={l.label}
              size="small"
              component="a"
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              startIcon={l.variant ? linkIcon(l.variant) : undefined}
            >
              {l.label}
            </Button>
          ))}
        </Stack>
      </CardContent>
    </Card>
  )
}

export function ProjectsSection() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <Box id="projects" component="section" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <SectionTitle
          eyebrow={projectsSection.eyebrow}
          title={projectsSection.title}
          subtitle={projectsSection.subtitle}
        />
        {featured ? (
          <Box sx={{ mb: { xs: 4, md: 6 } }}>
            <FeaturedPov project={featured} />
          </Box>
        ) : null}
        <Grid container spacing={3}>
          {rest.map((p) => (
            <Grid key={p.id} size={{ xs: 12, sm: 6, lg: 4 }}>
              <ProjectCard project={p} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
