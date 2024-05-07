import React from 'react';
import { Typography, Button, List, ListItem, ListItemText, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function AdminPanel() {
  // Ejemplo de datos, deberías cargar estos datos desde tu backend o estado global
  const users = [
    { id: 1, name: 'Alice', role: 'Usuario' },
    { id: 2, name: 'Bob', role: 'Administrador' }
  ];

  const categories = [
    { id: 1, name: 'Transporte' },
    { id: 2, name: 'Alimentación' }
  ];

  return (
    <Box p={2}>
      <Typography variant="h6">Gestión de Usuarios</Typography>
      <List>
        {users.map(user => (
          <ListItem key={user.id}>
            <ListItemText primary={user.name} secondary={user.role} />
            <Button>Edit</Button>
            <Button>Delete</Button>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary" component={Link} to="/add-user">Añadir Usuario</Button>

      <Typography variant="h6" sx={{ mt: 4 }}>Gestión de Categorías</Typography>
      <List>
        {categories.map(category => (
          <ListItem key={category.id}>
            <ListItemText primary={category.name} />
            <Button>Edit</Button>
            <Button>Delete</Button>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary" component={Link} to="/add-category">Añadir Categoría</Button>

      <Button variant="contained" color="primary" component={Link} to="/" sx={{ mt: 4 }}>Volver</Button>
    </Box>
  );
}

export default AdminPanel;
