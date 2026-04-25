import { Box, Button, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { alpha } from '@mui/material/styles'
import { resumeHighlightBullets, resumeSection, siteConfig } from '../data/content'
import { SectionTitle } from './SectionTitle'
import { elevatedSurface } from '../theme/theme'

type Props = { onDownload: () => void }

export function ResumeSection({ onDownload }: Props) {
  return (
    <Box id="resume" component="section" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <SectionTitle
          eyebrow={resumeSection.eyebrow}
          title={resumeSection.title}
          subtitle={resumeSection.subtitle}
        />
        <Card
          elevation={0}
          sx={{
            backgroundColor: elevatedSurface,
            border: (t) => `1px solid ${alpha(t.palette.common.white, 0.08)}`,
            maxWidth: 800,
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Stack component="ul" spacing={1.5} sx={{ m: 0, pl: 2.5, listStyle: 'disc' }}>
              {resumeHighlightBullets.map((line) => (
                <Typography key={line} component="li" variant="body1" color="text.secondary" sx={{ pl: 0.5, lineHeight: 1.75 }}>
                  {line}
                </Typography>
              ))}
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
              <Button variant="contained" size="large" startIcon={<DownloadIcon />} onClick={onDownload}>
                Download resume (PDF)
              </Button>
              <Button
                size="large"
                component="a"
                href={siteConfig.resumePdfPath}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<OpenInNewIcon />}
                sx={{ border: (t) => `1px solid ${alpha(t.palette.common.white, 0.12)}` }}
              >
                View in new tab
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}
