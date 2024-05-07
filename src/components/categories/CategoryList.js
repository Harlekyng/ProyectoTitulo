import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function CategoryList() {
  const categories = [{ id: 1, name: 'Comida' }, { id: 2, name: 'Transporte' }];

  return (
    <>
      <List>
        {categories.map(category => (
          <ListItem key={category.id}>
            <ListItemText primary={category.name} />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary" component={Link} to="/">Volver</Button>
    </>
  );
}

export default CategoryList;
