import { Container, Box } from '@mui/material'
interface PageContentProps {
  children: React.ReactNode
  // maxWidth?: 'xs' | 'xl' | 'sm' | 'md' | 'lg'
  container?: boolean
  sx?: any
}

export const PageContent = (props: PageContentProps) => {
  const { children, container, sx } = props

  if (container) {
    return (
      <Container
        style={{
          padding: '30px 30px 30px 30px'
          // minHeight: '100%'
        }}
        sx={sx}
      >
        {children}
      </Container>
    )
  }

  return (
    <Box
      sx={{
        padding: { md: '30px 30px 30px 30px', xs: '15px 15px 15px 15px' }
        // minHeight: '100%'
      }}
    >
      {children}
    </Box>
  )
}

PageContent.defaultProps = {}
