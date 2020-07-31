import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';
import { useImmer } from 'use-immer';

import Paper from '@material-ui/core/Paper';
import { UserRow } from '../';
import { UserForm } from '../';

import { serverAPI } from "../../serverAPI";

const initState = {
  users: [],
  isUserForm: false,
  addedUser: {},
  editedUser: {},
};

const useStyles = makeStyles({
  table: {
    maxWidth: 650,
  },
});

export function UserList() {
  const classes = useStyles();
  const [state, setState] = useImmer(initState);

  const onSubmitUserForm = useCallback(({ editedUser }) => setState((draft) => {
      draft.isUserForm = false;
      if (draft.addedUser) {
        draft.users.push(editedUser);
        draft.addedUser = {};
      }

      if (draft.editedUser) {
        Object.assign(draft.editedUser, editedUser);
        draft.editedUser = {};
      }
  }), []);

  const getUser = useCallback(() => {
    if (state.editedUser.id) return state.addedUser;
    if (state.addedUser.id) return state.addedUser;
  }, [state.editedUser, state.addedUser]);

  const onClose = useCallback(() => setState((draft) => {
    draft.isUserForm = false;
    draft.editedUser = {};
    draft.addedUser = {};
  }), []);
  const onAddUser = useCallback(() => {
    try {
      fetchData();

      async function fetchData() {
        const newUser = await serverAPI.addUser();
        setState((draft) => {
          draft.addedUser = newUser;
          draft.editedUser = null;
          draft.isUserForm = true;
        });
      }
    }
    catch (e) {
      console.log(serverAPI.addUser.name, e);
    }
  }, []);
  React.useEffect(() => {
    try {
      fetchData();

      async function fetchData() {
        const users = await serverAPI.getUsers();
        setState((draft) => { draft.users = users; });
      }
    }
    catch (e) {
      console.log(serverAPI.getUsers.name, e);
    }
  }, []);

  return (
    <>
      <IconButton onClick={onAddUser}>
        <AddIcon />
      </IconButton>
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
      <UserForm
        user={getUser}
        isOpen={state.isUserForm}
        onClose={onClose}
        onSubmit={onSubmitUserForm}
      />
    </>
  );
}