import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Asegúrate de que la ruta es correcta
import { Box, TextField, Button, Typography, Link } from '@mui/material';

function Login() {
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Usar la función login desde AuthContext

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo, clave })
      });
      const userData = await response.json();
      if (response.ok) {
        login(userData); // Actualiza el estado de autenticación global
        navigate('/'); // Navegar al dashboard después del login
      } else {
        throw new Error(userData.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert(error.message); // Manejo de errores
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
