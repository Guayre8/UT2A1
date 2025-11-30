import { useEffect, useState } from 'react'
import {
  Box, Paper, TextField, Button,
  Table, TableHead, TableRow, TableBody, TableCell,
  TableContainer, Typography
} from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

interface ItemType {
  id?: number
  nombre: string
  marca: string
  tipo: string
  precio: number
}

const initialItem: ItemType = {
  nombre: '',
  marca: '',
  tipo: '',
  precio: 0
}

export default function Dashboard() {
  const [item, setItem] = useState<ItemType>(initialItem)
  const [tableData, setTableData] = useState<ItemType[]>([])

  useEffect(() => { loadItems() }, [])

  async function loadItems() {
    const resp = await fetch('http://localhost:3030/getItems')
    const json = await resp.json()
    setTableData(json.data || [])
  }

  async function saveItem(e: React.FormEvent) {
    e.preventDefault()

    const q = new URLSearchParams({
      nombre: item.nombre,
      marca: item.marca,
      tipo: item.tipo,
      precio: String(item.precio)
    })

    const resp = await fetch(`http://localhost:3030/addItem?${q}`)
    const json = await resp.json()

    if (json.affectedRows > 0) {
      alert('Insertado')
      setItem(initialItem)
      loadItems()
    }
  }

  async function deleteItem(id?: number) {
    if (!id) return
    const resp = await fetch(`http://localhost:3030/deleteItem?id=${id}`)
    const json = await resp.json()
    if (json.affectedRows > 0) loadItems()
  }

  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6">Insertar registro</Typography>

        <Box component="form" onSubmit={saveItem} sx={{ display: 'grid', gap: 2 }}>
          <TextField label="Nombre" value={item.nombre}
            onChange={e => setItem({ ...item, nombre: e.target.value })} />

          <TextField label="Marca" value={item.marca}
            onChange={e => setItem({ ...item, marca: e.target.value })} />

          <TextField label="Tipo" value={item.tipo}
            onChange={e => setItem({ ...item, tipo: e.target.value })} />

          <TextField label="Precio" type="number" value={item.precio}
            onChange={e => setItem({ ...item, precio: Number(e.target.value) })} />

          <Button type="submit" variant="contained">Guardar</Button>
        </Box>
      </Paper>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Acciones</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Marca</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Precio</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tableData.map(row => (
              <TableRow key={row.id}>
                <TableCell>
                  <Button onClick={() => deleteItem(row.id)}>
                    <DeleteForeverIcon />
                  </Button>
                </TableCell>
                <TableCell>{row.nombre}</TableCell>
                <TableCell>{row.marca}</TableCell>
                <TableCell>{row.tipo}</TableCell>
                <TableCell>{row.precio}</TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>

    </Box>
  )
}
