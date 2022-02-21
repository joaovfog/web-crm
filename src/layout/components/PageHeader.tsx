import { Box } from '@mui/material'

interface PageHeaderProps {
  children: React.ReactNode
}

export const PageHeader = (props: PageHeaderProps) => {
  const { children } = props

  return (
    <Box
      sx={{
        background: '',
        padding: { md: '30px 30px 0 30px', xs: '30px 15px 0 15px' }
      }}
    >
      {children}
    </Box>
  )
}
