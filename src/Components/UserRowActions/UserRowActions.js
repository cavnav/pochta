import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';

export function UserRowActions() {
  return (
    <div>
      <AddIcon />
      <DeleteOutlineIcon />
      <EditIcon />
    </div>
  );
}