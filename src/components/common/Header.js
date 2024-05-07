import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  const handleLogout = () => {
    console.log('Logout'); // Implementa tu lógica de cierre de sesión aquí
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          FinanZApp
        </Typography>
        <Button color="inherit" onClick={handleLogout}>Cerrar Sesión</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
