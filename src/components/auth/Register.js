import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

function Register() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      nombre,
      correo,
      clave
    };

    fetch('http://localhost:3001/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        // Si la respuesta no es 2xx, lanzamos el texto de la respuesta como error
        return response.json().then(json => { throw new Error(json.message) });
      }
      return response.json();  // Aquí procesamos la respuesta como JSON
    })
    .then(data => {
      console.log('Success:', data);
      alert(data.message); // Mostrar el mensaje de éxito desde el servidor
    })
    .catch((error) => {
      console.error('Error:', error);
      alert(error.message);  // Mostrar el mensaje de error desde el servidor
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="80vh">
      <Typography variant="h5" color="primary.main">Registro</Typography>
      <TextField label="Nombre" margin="normal" required value={nombre} onChange={e => setNombre(e.target.value)} />
      <TextField label="Correo electrónico" type="email" margin="normal" required value={correo} onChange={e => setCorreo(e.target.value)} />
      <TextField label="Contraseña" type="password" margin="normal" required value={clave} onChange={e => setClave(e.target.value)} />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Registrarme
      </Button>
    </Box>
  );
}

export default Register;
