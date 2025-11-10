import React from 'react'
import { Button, Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('autenticado')
    navigate('/')
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Página Home</Typography>
      <Button variant="contained" color="error" onClick={handleLogout} sx={{ mt: 2 }}>
        Cerrar sesión
      </Button>
    </Box>
  )
}
