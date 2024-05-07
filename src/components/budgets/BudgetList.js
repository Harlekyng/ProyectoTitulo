import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function BudgetList() {
  const budgets = [{ id: 1, category: 'Comida', amount: 200 }, { id: 2, category: 'Transporte', amount: 150 }];

  return (
    <>
      <List>
        {budgets.map(budget => (
          <ListItem key={budget.id}>
            <ListItemText primary={budget.category} secondary={`Presupuesto: $${budget.amount}`} />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary" component={Link} to="/">Volver</Button>
    </>
  );
}

export default BudgetList;
