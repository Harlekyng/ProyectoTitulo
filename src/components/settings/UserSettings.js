import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useAuth } from '../../context/AuthContext';

function UserSettings() {
    const { user } = useAuth();

    return (
        <Box sx={{ mt: 2, p: 2 }}>
            <Typography variant="h6">Configuración de Usuario</Typography>
            <Typography>{`Usuario actual: ${user ? user.nombre : 'No autenticado'}`}</Typography>
            <Typography>{`Rol actual: ${user ? user.rol : 'No rol'}`}</Typography>
            {/* Verificación explícita del rol */}
            {user && user.rol === 'administrador' ? (
                <Button variant="contained" color="primary" onClick={() => console.log('Admin Panel')}>
                    Ir al Panel de Administración
                </Button>
            ) : (
                <Typography>Acceso al panel de administración no permitido.</Typography>
            )}
        </Box>
    );
}

export default UserSettings;
