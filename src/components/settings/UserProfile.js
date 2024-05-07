import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function UserProfile() {
  // Datos de ejemplo, remplázalos con tus datos dinámicos
  const userProfile = {
    name: "John Doe",
    email: "john@example.com",
    role: "Usuario"
  };

  return (
    <Box p={2}>
      <Typography variant="h6">Perfil del Usuario</Typography>
      <Typography>{`Nombre: ${userProfile.name}`}</Typography>
      <Typography>{`Email: ${userProfile.email}`}</Typography>
      <Typography>{`Rol: ${userProfile.role}`}</Typography>
      <Button variant="contained" color="primary" component={Link} to="/" sx={{ mt: 2 }}>Volver</Button>
    </Box>
  );
}

export default UserProfile;
