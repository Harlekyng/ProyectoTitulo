import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function AlertForm() {
  const [alert, setAlert] = useState({ type: '', description: '' });

  const handleChange = e => {
    setAlert({ ...alert, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(alert); // Aquí agregarías la lógica para enviar los datos al servidor o a tu estado global
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        label="Tipo de Alerta"
        name="type"
        value={alert.type}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Descripción"
        name="description"
        value={alert.description}
        onChange={handleChange}
        fullWidth
        multiline
        rows={4}
      />
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>Guardar</Button>
      <Button variant="contained" component={Link} to="/" sx={{ mt: 3, mb: 2 }}>Volver</Button>
    </Box>
  );
}

export default AlertForm;
