import React from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Asegúrate de haber instalado react-router-dom

function Dashboard() {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Tablero Principal
      </Typography>
      <Grid container spacing={3}>
        {/* Sección de Transacciones */}
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Typography variant="h6">Transacciones</Typography>
            <Typography variant="body2">
              Revisa y gestiona tus transacciones.
            </Typography>
            <Button component={Link} to="/transactions" variant="contained" color="primary" sx={{ mt: 2 }}>
              Ver Transacciones
            </Button>
          </Paper>
        </Grid>

        {/* Sección de Metas de Ahorro */}
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Typography variant="h6">Metas de Ahorro</Typography>
            <Typography variant="body2">
              Define y sigue tus metas de ahorro.
            </Typography>
            <Button component={Link} to="/goals" variant="contained" color="primary" sx={{ mt: 2 }}>
              Ver Metas
            </Button>
          </Paper>
        </Grid>

        {/* Sección de Presupuestos */}
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Typography variant="h6">Presupuestos</Typography>
            <Typography variant="body2">
              Planifica y controla tus presupuestos.
            </Typography>
            <Button component={Link} to="/budgets" variant="contained" color="primary" sx={{ mt: 2 }}>
              Ver Presupuestos
            </Button>
          </Paper>
        </Grid>

        {/* Sección de Categorías de Gastos */}
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Typography variant="h6">Categorías de Gastos</Typography>
            <Typography variant="body2">
              Administra las categorías de tus gastos.
            </Typography>
            <Button component={Link} to="/categories" variant="contained" color="primary" sx={{ mt: 2 }}>
              Ver Categorías
            </Button>
          </Paper>
        </Grid>

        {/* Sección de Alertas */}
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Typography variant="h6">Alertas</Typography>
            <Typography variant="body2">
              Configura y revisa tus alertas financieras.
            </Typography>
            <Button component={Link} to="/alerts" variant="contained" color="primary" sx={{ mt: 2 }}>
              Ver Alertas
            </Button>
          </Paper>
        </Grid>

        {/* Sección de Configuración/Perfil del Usuario */}
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Typography variant="h6">Perfil y Configuración</Typography>
            <Typography variant="body2">
              Ajusta tu perfil y configuraciones de seguridad.
            </Typography>
            <Button component={Link} to="/settings" variant="contained" color="primary" sx={{ mt: 2 }}>
              Configuración
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
