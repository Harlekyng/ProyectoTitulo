import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';

function TransactionList() {
  // Aquí deberías cargar tus transacciones desde el estado o una API
  const transactions = [{ id: 1, type: 'Ingreso', amount: 100 }, { id: 2, type: 'Gasto', amount: 50 }];

  return (
    <List>
      {transactions.map(transaction => (
        <React.Fragment key={transaction.id}>
          <ListItem>
            <ListItemText primary={`Tipo: ${transaction.type}`} secondary={`Monto: ${transaction.amount}`} />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}

export default TransactionList;
