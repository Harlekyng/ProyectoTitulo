import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function CategoryForm() {
  const [category, setCategory] = useState({ name: '' });

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(category);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        label="Nombre de la Categoría"
        name="name"
        value={category.name}
        onChange={handleChange}
        fullWidth
      />
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>Guardar</Button>
      <Button variant="contained" component={Link} to="/" sx={{ mt: 3, mb: 2 }}>Volver</Button>
    </Box>
  );
}

export default CategoryForm;
