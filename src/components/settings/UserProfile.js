import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Box, TextField, Button, Typography } from '@mui/material';

function UserProfile() {
    const { user, logout } = useAuth();
    const [editInfo, setEditInfo] = useState({ nombre: '', correo: '', clave: '' });

    useEffect(() => {
        if (user) {
            setEditInfo({ nombre: user.nombre, correo: user.correo, clave: '' });
        }
    }, [user]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:3001/api/users/${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editInfo)
            });
            if (!response.ok) {
                throw new Error('Error al actualizar información del usuario');
            }
            alert('Información actualizada correctamente');
        } catch (error) {
            console.error('Error al actualizar información del usuario:', error);
            alert(error.message);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, p: 2 }}>
            <Typography variant="h6">Perfil del Usuario</Typography>
            <TextField
                label="Nombre"
                name="nombre"
                value={editInfo.nombre}
                onChange={handleInputChange}
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                label="Correo electrónico"
                name="correo"
                value={editInfo.correo}
                onChange={handleInputChange}
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                label="Nueva contraseña"
                name="clave"
                type="password"
                value={editInfo.clave}
                onChange={handleInputChange}
                fullWidth
                sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" sx={{ mr: 1 }}>Actualizar</Button>
            <Button variant="outlined" onClick={logout}>Cerrar Sesión</Button>
        </Box>
    );
}

export default UserProfile;
