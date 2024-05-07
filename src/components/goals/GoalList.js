import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';

function GoalList() {
  const goals = [{ id: 1, name: 'Viaje a Europa', amount: 3000 }];

  return (
    <List>
      {goals.map(goal => (
        <React.Fragment key={goal.id}>
          <ListItem>
            <ListItemText primary={goal.name} secondary={`Objetivo: $${goal.amount}`} />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}

export default GoalList;
