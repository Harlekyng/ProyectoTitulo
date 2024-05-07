import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

function Register() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="80vh">
      <Typography variant="h5" color="primary.main">Registro</Typography>
      <TextField label="Nombre" margin="normal" />
      <TextField label="Apellido" margin="normal" />
      <TextField label="Correo electrónico" margin="normal" />
      <TextField label="Contraseña" type="password" margin="normal" />
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Registrarme
      </Button>
    </Box>
  );
}

export default Register;
