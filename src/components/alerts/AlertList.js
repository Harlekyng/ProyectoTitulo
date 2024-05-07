import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function AlertList() {
  const alerts = [
    { id: 1, type: 'Alta', description: 'Gasto superior a $500 detectado' },
    { id: 2, type: 'Media', description: 'Presupuesto al 75% de su capacidad' }
  ];

  return (
    <>
      <List>
        {alerts.map(alert => (
          <ListItem key={alert.id}>
            <ListItemText primary={`Alerta: ${alert.type}`} secondary={alert.description} />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary" component={Link} to="/">Volver</Button>
    </>
  );
}

export default AlertList;
