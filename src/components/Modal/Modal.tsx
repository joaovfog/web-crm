import { Modal as MuiModal, SxProps, Theme } from '@mui/material'

interface ModalProps {
  open: boolean
  style?: any
  children: React.ReactNode
  onClose: VoidFunction
  sx?: SxProps<Theme>
}

export const Modal = (props: ModalProps) => {
  const { open, style, onClose, children, sx } = props

  return (
    <MuiModal
      open={open}
      onClose={onClose}
      // onBackdropClick={() => console.log()}
      sx={sx}
      // keepMounted
    >
      <div style={style}>{children}</div>
    </MuiModal>
  )
}
