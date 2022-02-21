import { Button as Muibutton, CircularProgress } from '@mui/material'

interface ButtonProps {
  form?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  children: React.ReactNode
  variant?: 'contained' | 'outlined' | 'text'
  size?: 'small' | 'medium' | 'large'
  style?: any
  loading?: boolean
  onClick?: any
  className?: any
  startIcon?: React.ReactNode
  sx?: any
  disabled?: any
}

export const Button = (props: ButtonProps) => {
  const {
    form,
    type,
    children,
    variant,
    size,
    style,
    loading,
    onClick,
    className,
    startIcon,
    sx,
    disabled
  } = props

  return (
    <Muibutton
      variant={variant}
      className={className}
      form={form}
      type={type}
      // sx={{ '&:hover': { backgroundColor: '#232e40' } }}
      startIcon={
        loading ? (
          <CircularProgress
            size={14}
            color={variant === 'contained' ? 'inherit' : 'primary'}
          />
        ) : (
          startIcon
        )
      }
      onClick={onClick}
      disabled={loading || disabled}
      size={size}
      style={{
        borderRadius: '8px',
        height: '100%',
        textTransform: 'none',
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 15,
        fontWeight: 600,
        color: variant === 'contained' ? 'white' : '#006fb2',
        ...style
      }}
      sx={sx}
      disableElevation
    >
      {children}
    </Muibutton>
  )
}

Button.defaultProps = {
  form: 'button-id',
  type: 'button',
  variant: 'contained',
  size: 'large',
  loading: false,
  onClick: () => console.log('button click')
}
