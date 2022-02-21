import { Breadcrumbs as MuiBreadcrumbs } from '@mui/material'
import { MdKeyboardArrowRight } from 'react-icons/md'

interface BreadcumbsProps {
  children: React.ReactNode
  sx?: any
  style?: any
}

export const Breadcrumbs = (props: BreadcumbsProps) => {
  const { children, style } = props

  return (
    <MuiBreadcrumbs
      style={style}
      sx={{ display: { xs: 'none', sm: 'flex' } }}
      aria-label="breadcrumb"
      separator={<MdKeyboardArrowRight size={18} />}
    >
      {children}
    </MuiBreadcrumbs>
  )
}
