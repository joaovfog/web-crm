import { createTheme } from '@mui/material'

export const muiTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  palette: {
    primary: {
      main: '#f58220'
    }
  },
  typography: {
    fontFamily: 'Inter',
    fontSize: 14
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {}
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter',
          // height: 40,
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        root: {
          underline: {
            '&:hover:not($disabled):before': {
              backgroundColor: 'rgba(0, 188, 212, 0.7)'
            }
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#e0e0e0'
            },
            '&:hover fieldset': {
              borderColor: '#f58220'
            },
            '&.Mui-focused fieldset': {
              borderColor: '#f58220'
            }
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#e0e0e0'
            },
            '&:hover fieldset': {
              borderColor: '#f58220'
            },
            '&.Mui-focused fieldset': {
              borderColor: '#f58220'
            }
          }
        },
        notchedOutline: {
          border: '1px solid #e0e0e0'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          border: ''
        }
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#e0e0e0'
            },
            '&:hover fieldset': {
              borderColor: '#006fb2'
            },
            '&.Mui-focused fieldset': {
              borderColor: '#006fb2'
            }
          }
        }
      }
    }
  }
})
