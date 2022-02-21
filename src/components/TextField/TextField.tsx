import { TextField as MuiTextField } from '@mui/material'
import { CSSProperties } from 'react'
// import MaskedInput from 'react-text-mask'

interface TextFieldProps {
  label?: string
  placeholder?: string
  type?: string
  style?: CSSProperties
  InputProps?: any
  mask?: string
  autoFocus?: boolean
  sx?: any
  multiline?: boolean
  rows?: number
  maxRows?: number
  onChange?: any
  value?: any
  variant?: 'outlined' | 'filled' | 'standard'
}

export const TextField = (props: TextFieldProps) => {
  const {
    label,
    placeholder,
    type,
    style,
    InputProps,
    autoFocus,
    sx,
    multiline,
    rows,
    maxRows,
    onChange,
    value,
    variant
  } = props

  return (
    <MuiTextField
      label={label}
      onChange={onChange}
      value={value}
      variant={variant}
      placeholder={placeholder}
      autoComplete="no"
      size="small"
      type={type}
      multiline={multiline}
      InputProps={InputProps}
      autoFocus={autoFocus}
      rows={rows}
      maxRows={maxRows}
      style={{ width: '100%', ...style }}
      sx={sx}
    />
  )
}

TextField.defaultProps = {
  autoFocus: false,
  type: 'text',
  multiline: false,
  rows: 1
}
