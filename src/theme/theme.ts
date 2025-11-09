import { createTheme } from '@mui/material/styles'
import type { PaletteMode } from '@mui/material'


const mode: PaletteMode = 'light'

const theme = createTheme({
  palette: {
    mode,
    primary: {
      main: '#0D47A1',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#FF6F00' 
    },
    background: {
      default: '#f5f7fb'
    },
    error: {
      main: '#d32f2f'
    },
    success: {
      main: '#2e7d32'
    },
    info: {
      main: '#0288d1'
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: '2rem', fontWeight: 700 },
    h2: { fontSize: '1.5rem', fontWeight: 600 }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: false
      },
      styleOverrides: {
        root: {
          borderRadius: 12
        }
      }
    }
  }
})

export default theme
