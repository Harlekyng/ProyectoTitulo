import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function BudgetForm() {
  const [budget, setBudget] = useState({ category: '', amount: '' });

  const handleChange = (e) => {
    setBudget({ ...budget, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(budget);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        label="Categoría"
        name="category"
        value={budget.category}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Monto"
        name="amount"
        type="number"
        value={budget.amount}
        onChange={handleChange}
        fullWidth
      />
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>Guardar</Button>
      <Button variant="contained" component={Link} to="/" sx={{ mt: 3, mb: 2 }}>Volver</Button>
    </Box>
  );
}

export default BudgetForm;
