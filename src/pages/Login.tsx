import React, { useState } from 'react'
import { Box, Button, TextField, Typography, Alert } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [mensaje, setMensaje] = useState<string | null>(null)
  const [tipo, setTipo] = useState<'success' | 'error' | null>(null)

  const navigate = useNavigate()

  // Credenciales simuladas (sustituye por las que quieras)
  const bduser = 'guayre'
  const bdpasswd = '1234'

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Usuario:', user, 'Contraseña:', password)

    if (user === bduser && password === bdpasswd) {
      localStorage.setItem('autenticado', 'true')
      setMensaje('Acceso correcto')
      setTipo('success')

      setTimeout(() => {
        navigate('/home')
      }, 1000)
    } else {
      localStorage.removeItem('autenticado')
      setMensaje('Usuario o contraseña incorrectos')
      setTipo('error')
    }
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: 320,
        mx: 'auto',
        mt: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        bgcolor: 'background.paper'
      }}
    >
      <Typography variant="h4" textAlign="center" gutterBottom>
        Iniciar sesión
      </Typography>

      <TextField
        label="Usuario"
        variant="outlined"
        required
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <TextField
        label="Contraseña"
        variant="outlined"
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 1 }}
      >
        Acceder
      </Button>

      {mensaje && tipo && (
        <Alert severity={tipo} sx={{ mt: 2 }}>
          {mensaje}
        </Alert>
      )}
    </Box>
  )
}

export default Login
