import React from 'react'
import { Container, Typography, Button, Box } from '@mui/material'

const Login: React.FC = () => {
  return (
    <Container component="main" maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Página de "Login" de Guayre Espino Méndez
      </Typography>

      <Typography variant="h2" gutterBottom>
        Bienvenid@
      </Typography>

      <Typography variant="h3" color="text.secondary" gutterBottom>
        Introducción a la aplicación
      </Typography>

      <Box sx={{ my: 4 }}>
        <Typography variant="subtitle1">Ejemplo de subtítulo</Typography>
        <Typography variant="body1">Ejemplo de body</Typography>
        <Typography variant="caption">Ejemplo de Caption</Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Button variant="text" color="primary">Texto Primario</Button>
        <Button variant="contained" color="primary">Texto primario en contenedor</Button>
        <Button variant="outlined" color="primary">Color Primario con borde en contenedor</Button>

        <Button variant="contained" color="secondary">Color secundario</Button>
        <Button variant="contained" color="error">Color de Error</Button>
        <Button variant="contained" color="success">Color de que todo ha ido bien</Button>
      </Box>
    </Container>
  )
}

export default Login
