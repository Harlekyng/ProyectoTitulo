import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Button, IconButton, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/api/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/api/categories/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        setCategories(categories.filter(category => category.id !== id));
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error al eliminar la categoría');
      });
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Button variant="contained" color="primary" component={Link} to="/category/new">Añadir Categoría</Button>
        <Button variant="contained" color="secondary" component={Link} to="/">Volver</Button>
      </Box>
      <List>
        {categories.map(category => (
          <ListItem key={category.id} secondaryAction={
            <>
              <IconButton edge="end" aria-label="edit" onClick={() => navigate(`/category/edit/${category.id}`)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(category.id)}>
                <DeleteIcon />
              </IconButton>
            </>
          }>
            <ListItemText primary={category.nombre} secondary={category.descripcion} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default CategoryList;