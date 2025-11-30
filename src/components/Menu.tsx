import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/authSlice'
import type { RootState, AppDispatch } from '../store/store'

import {
  AppBar, Toolbar, IconButton, Typography,
  Drawer, List, ListItem, ListItemButton, ListItemIcon,
  ListItemText, Box
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import AssessmentIcon from '@mui/icons-material/Assessment'
import LogoutIcon from '@mui/icons-material/Logout'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

export default function Menu() {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const { autenticado, nombreUsuario, rolUsuario } = useSelector(
    (state: RootState) => state.autenticador
  )

  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!autenticado) navigate('/')
  }, [autenticado])

  return (
    <>
      <AppBar position="static">
        <Toolbar>

          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>

          <Typography sx={{ flexGrow: 1, textAlign: 'center' }}>
            {nombreUsuario}
          </Typography>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography>{rolUsuario}</Typography>
            <AccountCircleIcon />
          </Box>

        </Toolbar>
      </AppBar>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 250 }}>
          <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem disablePadding>
              <ListItemButton><ListItemIcon><HomeIcon /></ListItemIcon><ListItemText primary="Inicio" /></ListItemButton>
            </ListItem>
          </Link>

          <Link to="/reports" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem disablePadding>
              <ListItemButton><ListItemIcon><AssessmentIcon /></ListItemIcon><ListItemText primary="Informes" /></ListItemButton>
            </ListItem>
          </Link>

          <ListItem disablePadding onClick={() => { dispatch(logout()); navigate('/') }}>
            <ListItemButton><ListItemIcon><LogoutIcon /></ListItemIcon><ListItemText primary="Salir" /></ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}
