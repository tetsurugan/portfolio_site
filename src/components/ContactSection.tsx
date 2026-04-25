import { useState, type FormEvent } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import DescriptionIcon from '@mui/icons-material/Description'
import { alpha } from '@mui/material/styles'
import { contactSection, siteConfig } from '../data/content'
import { SectionTitle } from './SectionTitle'
import { elevatedSurface } from '../theme/theme'

export function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'site visitor'}`)
    const body = encodeURIComponent(
      `${message}\n\n—\nFrom: ${name}\nReply-to: ${email}`,
    )
    /* Replace mailto with Formspare, Resend, or your API when you wire a backend. */
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
  }

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: (t) => alpha(t.palette.background.paper, 0.4),
        borderTop: (t) => `1px solid ${t.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          eyebrow={contactSection.eyebrow}
          title={contactSection.title}
        />
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={4} sx={{ alignItems: 'flex-start' }}>
          <Box sx={{ flex: '1 1 45%', minWidth: 0 }}>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5, lineHeight: 1.75, maxWidth: 480 }}>
              {contactSection.intro}
            </Typography>
            <Typography variant="body2" color="text.disabled" sx={{ mb: 3, lineHeight: 1.7, maxWidth: 480 }}>
              {contactSection.formHint}
            </Typography>
            <Stack spacing={2}>
              <Button
                component="a"
                href={`mailto:${siteConfig.email}`}
                startIcon={<EmailOutlinedIcon />}
                sx={{ alignSelf: 'flex-start', color: 'text.primary' }}
              >
                {siteConfig.email}
              </Button>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75, alignItems: 'flex-start' }}>
                <Link href={siteConfig.github} target="_blank" rel="noopener noreferrer" variant="body2" color="primary">
                  GitHub
                </Link>
                <Link href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" variant="body2" color="primary">
                  LinkedIn
                </Link>
                <Button
                  component="a"
                  href={siteConfig.resumePdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<DescriptionIcon />}
                  size="small"
                  sx={{ color: 'text.primary', pl: 0, justifyContent: 'flex-start', textTransform: 'none' }}
                >
                  Resume (PDF)
                </Button>
              </Box>
            </Stack>
          </Box>
          <Card
            component="form"
            onSubmit={handleSubmit}
            elevation={0}
            sx={{
              flex: '1 1 50%',
              width: '100%',
              maxWidth: 520,
              backgroundColor: elevatedSurface,
              border: (t) => `1px solid ${alpha(t.palette.common.white, 0.08)}`,
            }}
          >
            <CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
              <Stack spacing={2.5}>
                <TextField
                  label="Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                  required
                  autoComplete="name"
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  required
                  autoComplete="email"
                />
                <TextField
                  label="Message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  fullWidth
                  required
                  multiline
                  minRows={4}
                />
                <Button type="submit" variant="contained" size="large" fullWidth>
                  Send message
                </Button>
                <Typography variant="caption" color="text.disabled">
                  Uses your default mail app. To embed a no-backend form, use a provider and replace onSubmit in ContactSection.
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  )
}
