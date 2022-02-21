import { IconButton as MuiIconButton } from '@mui/material'

interface IconButtonProps {
  children: React.ReactNode
  onClick?: any
  sx?: any
  style?: any
  size?: any
  edge?: any
  color?: any
}

export const IconButton = (props: IconButtonProps) => {
  const { children, onClick, sx, style, size, edge, color } = props

  return (
    <MuiIconButton
      sx={sx}
      edge={edge}
      size={size}
      style={style}
      color={color}
      onClick={() => onClick()}
    >
      {children}
    </MuiIconButton>
  )
}
