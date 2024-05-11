import React, { useEffect, useState } from 'react';
import { Typography, Button, List, ListItem, ListItemText, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Asegúrate de ajustar la ruta de importación según tu estructura

function AdminPanel() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (user.role !== 'Administrador') {
      // Redireccionar o mostrar mensaje si no es administrador
      alert('Acceso no autorizado.');
      return;
    }

    // Simula la carga de datos
    fetchUsers();
    fetchCategories();
  }, [user]);

  const fetchUsers = async () => {
    const response = await fetch('/api/users'); // Ajusta la URL según tu configuración
    const data = await response.json();
    setUsers(data);
  };

  const fetchCategories = async () => {
    const response = await fetch('/api/categories'); // Ajusta la URL según tu configuración
    const data = await response.json();
    setCategories(data);
  };

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
