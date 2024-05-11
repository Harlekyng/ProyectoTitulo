import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, Box } from '@mui/material';

function CategoryForm({ editMode }) {
  const [category, setCategory] = useState({ nombre: '', descripcion: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (editMode) {
      fetch(`http://localhost:3001/api/categories/${id}`)
        .then(response => response.json())
        .then(data => setCategory({ nombre: data.nombre, descripcion: data.descripcion }))
        .catch(error => console.error('Error:', error));
    }
  }, [editMode, id]);

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = editMode ? 'PUT' : 'POST';
    const url = `http://localhost:3001/api/categories${editMode ? `/${id}` : ''}`;

    fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(category),
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        navigate('/categories');
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error al guardar la categoría');
      });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        label="Nombre de la Categoría"
        name="nombre"
        value={category.nombre}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Descripción"
        name="descripcion"
        value={category.descripcion}
        onChange={handleChange}
        fullWidth
        margin="normal"
        multiline
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button type="submit" variant="contained" color="primary">Guardar</Button>
        <Button variant="contained" color="secondary" onClick={() => navigate('/categories')}>Volver</Button>
      </Box>
    </Box>
  );
}

export default CategoryForm;