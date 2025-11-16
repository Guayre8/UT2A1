import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../store/store';
import { logout } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const userData = useSelector((state: RootState) => state.autenticador);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <Box sx={{ p: 4 }}>
      {userData.autenticado ? (
        <>
          <Typography variant="h4">
            Hola {userData.nombreUsuario} ({userData.rolUsuario})
          </Typography>
          <Button variant="contained" color="error" onClick={handleLogout} sx={{ mt: 2 }}>
            Salir
          </Button>
        </>
      ) : (
        <Typography variant="h6">No has iniciado sesión.</Typography>
      )}
    </Box>
  );
};

export default Home;
