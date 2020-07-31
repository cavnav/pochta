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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    margin: 'auto',
  },
});

function createData(userName, userRoles, userId = Math.floor(Math.random() * 3 + 1)) {
  return { userId, userName, userRoles };
}

const users = [
  createData('Frozen yoghurt', 'admin, user, guest'),
  createData('Ice cream sandwich', 'admin, guest'),
  createData('Eclair', 'guest'),
  createData('Cupcake', 'admin'),
  createData('Gingerbread', 'user'),
];

export function UserList() {
  const classes = useStyles();

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
          {users.map((user, key = user.userId) => (
            <UserRow key={key} data={user} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
