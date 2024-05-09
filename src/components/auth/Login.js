import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Link } from '@mui/material';

function Login({ setIsAuthenticated }) {
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { correo, clave };

    const response = await fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const responseData = await response.json();

    if (response.ok) {
      setIsAuthenticated(true);  // Actualiza el estado de autenticación
      navigate('/');  // Redirige al dashboard
    } else {
      alert(responseData.message);  // Muestra mensaje de error si hay uno
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="80vh">
      <Typography variant="h5" color="primary.main">Inicio de Sesión</Typography>
      <TextField label="Correo electrónico" value={correo} onChange={e => setCorreo(e.target.value)} margin="normal" />
      <TextField label="Contraseña" type="password" value={clave} onChange={e => setClave(e.target.value)} margin="normal" />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, mb: 2 }}>
        Iniciar sesión
      </Button>
      <Link href="/register" underline="none">
        ¿No tienes cuenta? Regístrate
      </Link>
    </Box>
  );
}

export default Login;
