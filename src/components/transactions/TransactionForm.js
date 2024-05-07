import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function TransactionForm() {
  const [transaction, setTransaction] = useState({ type: '', amount: '' });

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para añadir o actualizar la transacción
    console.log(transaction);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        label="Tipo"
        name="type"
        value={transaction.type}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Monto"
        name="amount"
        value={transaction.amount}
        type="number"
        onChange={handleChange}
        fullWidth
      />
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
        Guardar
      </Button>
    </Box>
  );
}

export default TransactionForm;
