import React from 'react';
import { Box, TextField, Button, Typography, Link } from '@mui/material';

function Login() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="80vh">
      <Typography variant="h5" color="primary.main">Inicio de Sesión</Typography>
      <TextField label="Correo electrónico" margin="normal" />
      <TextField label="Contraseña" type="password" margin="normal" />
      <Button variant="contained" color="primary" sx={{ mt: 2, mb: 2 }}>
        Iniciar sesión
      </Button>
      <Link href="#" underline="none">
        ¿No tienes cuenta? Regístrate
      </Link>
    </Box>
  );
}

export default Login;
