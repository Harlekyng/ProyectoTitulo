import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function GoalForm() {
  const [goal, setGoal] = useState({ name: '', amount: '' });

  const handleChange = (e) => {
    setGoal({ ...goal, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para añadir o actualizar la meta
    console.log(goal);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        label="Nombre de la Meta"
        name="name"
        value={goal.name}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Monto Objetivo"
        name="amount"
        type="number"
        value={goal.amount}
        onChange={handleChange}
        fullWidth
      />
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
        Guardar
      </Button>
    </Box>
  );
}

export default GoalForm;
