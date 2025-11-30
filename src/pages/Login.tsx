import { useState } from 'react';
import { Box, Button, TextField, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login as loginAction } from '../store/authSlice';
import type { AppDispatch } from '../store/store';

const Login: React.FC = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState<string | null>(null);
  const [tipo, setTipo] = useState<'success' | 'error' | null>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const params = new URLSearchParams({
      user: user,
      password: password,
    });

    try {
      const resp = await fetch(`http://localhost:3030/login?${params.toString()}`);
      const json = await resp.json();

      if (json.data && json.data.length > 0) {
        const usuario = json.data[0];

        dispatch(
          loginAction({
            nombre: usuario.username, // backend devuelve username
            rol: usuario.rol,
          })
        );

        setMensaje('Acceso correcto');
        setTipo('success');

        setTimeout(() => {
          navigate('/home');
        }, 300);
      } else {
        setMensaje('Usuario o contraseña incorrectos');
        setTipo('error');
      }
    } catch (err) {
      console.error('Error:', err);
      setMensaje('Error de conexión con el servidor');
      setTipo('error');
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
        bgcolor: 'background.paper',
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
        autoComplete="username"
      />

      <TextField
        label="Contraseña"
        variant="outlined"
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
      />

      <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>
        Acceder
      </Button>

      {mensaje && tipo && (
        <Alert severity={tipo} sx={{ mt: 2 }}>
          {mensaje}
        </Alert>
      )}
    </Box>
  );
};

export default Login;
