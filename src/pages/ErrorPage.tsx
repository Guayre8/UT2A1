import React from 'react'
import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'

export default function ErrorPage() {
  const error = useRouteError()
  const titulo = isRouteErrorResponse(error)
    ? `${error.status} - ${error.statusText}`
    : 'Página no encontrada'

  return (
    <Box sx={{ textAlign: 'center', mt: 10 }}>
      <Typography variant="h3">{titulo}</Typography>
      <Typography sx={{ my: 2 }}>Ha ocurrido un error o la ruta no existe.</Typography>
      <Button variant="contained" component={Link} to="/">
        Volver al Login
      </Button>
    </Box>
  )
}
