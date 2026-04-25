import { Box, Stack, Typography } from '@mui/material'

type Props = { eyebrow?: string; title: string; subtitle?: string; align?: 'left' | 'center' }

export function SectionTitle({ eyebrow, title, subtitle, align = 'left' }: Props) {
  return (
    <Stack
      spacing={1.5}
      sx={{ mb: { xs: 4, md: 5 }, textAlign: align, maxWidth: align === 'center' ? 720 : 720 }}
    >
      {eyebrow ? (
        <Typography
          variant="overline"
          sx={{ color: 'primary.main', letterSpacing: '0.2em', fontWeight: 600 }}
        >
          {eyebrow}
        </Typography>
      ) : null}
      <Typography variant="h3" component="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
        {title}
      </Typography>
      {subtitle ? (
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560, mx: align === 'center' ? 'auto' : 0 }}>
          {subtitle}
        </Typography>
      ) : null}
      {align === 'center' ? null : <Box sx={{ width: 48, height: 3, borderRadius: 1, backgroundColor: 'primary.main', opacity: 0.7 }} />}
    </Stack>
  )
}
