import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';
import { UserRow } from '../';
import { serverAPI } from "../../serverAPI";

const initState = {
  users: [],
};

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    margin: 'auto',
  },
});

export function UserList() {
  const classes = useStyles();

  const [state, setState] = React.useReducer(tempReducer, initState);

  React.useEffect(() => {
    try {
      fetch();

      async function fetch() {
        const users = await serverAPI.getUsers();
        setState({ users });
      }
    }
    catch (e) {
      console.log(serverAPI.getUsers.name, e);
    }
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ФИО</TableCell>
            <TableCell align="right">Роли</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.users.map((user, key = user.userId) => (
            <UserRow key={key} data={user} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function tempReducer(prevState, newState = {}) {
  return {
    ...prevState,
    ...newState,
  };
}