import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';

const initState = {

};

export function UserRowActions() {
  const compRef = React.useRef();
  const [state, setState] = React.useReducer(initState);

  React.useEffect(() => {

  }, []);

  return (
    <div>
      <DeleteOutlineIcon/>
      <EditIcon />
    </div>
  );
}