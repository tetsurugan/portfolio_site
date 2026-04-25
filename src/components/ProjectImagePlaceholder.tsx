import { Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { elevatedSurface } from '../theme/theme'

type Props = { label: string; image?: string }

export function ProjectImagePlaceholder({ label, image }: Props) {
  if (image) {
    return (
      <Box
        component="img"
        src={image}
        alt={label}
        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    )
  }
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        minHeight: 200,
        display: 'grid',
        placeItems: 'center',
        background: (t) =>
          `linear-gradient(145deg, ${elevatedSurface} 0%, ${alpha(t.palette.primary.main, 0.1)} 100%)`,
        border: (t) => `1px solid ${alpha(t.palette.divider, 0.5)}`,
      }}
    >
      <Typography variant="overline" sx={{ letterSpacing: '0.15em', color: 'text.disabled' }}>
        Screenshot: {label}
      </Typography>
    </Box>
  )
}
