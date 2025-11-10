import React from 'react'
import { Typography, Box, Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Reports() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('autenticado')
    navigate('/')
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Página Error</Typography>
      <Button variant="contained" color="error" onClick={handleLogout} sx={{ mt: 2 }}>
        Cerrar sesión
      </Button>
    </Box>
  )
}
