import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function UserSettings() {
  const [settings, setSettings] = useState({ email: '', password: '' });

  const handleChange = e => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(settings); // Aquí agregarías la lógica para actualizar las configuraciones en el servidor
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        label="Correo Electrónico"
        name="email"
        value={settings.email}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Contraseña"
        name="password"
        type="password"
        value={settings.password}
        onChange={handleChange}
        fullWidth
      />
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>Actualizar</Button>
      <Button variant="contained" component={Link} to="/" sx={{ mt: 3, mb: 2 }}>Volver</Button>
    </Box>
  );
}

export default UserSettings;
