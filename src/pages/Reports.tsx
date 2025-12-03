import { useState } from 'react'
import { Typography, Box, Button } from '@mui/material'
import InformeColeccion from '../components/InformeColeccion'

interface ItemType {
  nombre: string
  marca: string
  tipo: string
  precio: number
}


export default function Reports() {

  const [datos, setDatos] = useState<ItemType[]>([])


  const [mostrarInforme, setMostrarInforme] = useState(false)

  async function obtenerDatos() {

    const resp = await fetch('http://localhost:3030/getItems')
    const json = await resp.json()

    setDatos(json.data || [])

    setMostrarInforme(true)
  }

  return (
    <Box sx={{ p: 4 }}>

      <Typography variant="h4" sx={{ mb: 3 }}>
        Informes
      </Typography>

      <Button
        variant="contained"
        onClick={obtenerDatos}
        sx={{ mb: 3 }}
      >
        INFORME COLECCIÓN
      </Button>

      {mostrarInforme && (
        <InformeColeccion datos={datos} />
      )}

    </Box>
  )
}
