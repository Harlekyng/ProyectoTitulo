import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useAuth } from '../../context/AuthContext';

function AdminPanel() {
    const [users, setUsers] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        if (user && user.rol === 'administrador') {
            fetchUsers();
        }
    }, [user]);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/users');
            const data = await response.json();
            if (!response.ok) {
                throw new Error('Error al obtener usuarios');
            }
            setUsers(data);
        } catch (error) {
            console.error('Error al cargar usuarios:', error);
            alert(error.message);
        }
    };

    const handleDelete = async (userId) => {
        try {
            const response = await fetch(`http://localhost:3001/api/users/${userId}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Error al eliminar usuario');
            }
            alert('Usuario eliminado correctamente');
            fetchUsers();  // Recargar lista tras eliminar
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
            alert(error.message);
        }
    };

    return (
        <Box p={2}>
            <Typography variant="h6">Gestión de Usuarios</Typography>
            <List>
                {users.map(user => (
                    <ListItem key={user.id} secondaryAction={
                        <Button onClick={() => handleDelete(user.id)} color="error">Eliminar</Button>
                    }>
                        <ListItemText primary={user.name} secondary={`Rol: ${user.role}`} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default AdminPanel;
