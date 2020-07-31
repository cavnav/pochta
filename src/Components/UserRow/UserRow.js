import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { UserRowActions } from '../';

import { UserRoleList } from '../';

export function UserRow({
  user,
}) {
    return (
      <TableRow>
          <TableCell component="th" scope="row">
            {user.userName}
          </TableCell>
          <TableCell align="right">
            <UserRoleList roles={user.userRoles} />
          </TableCell>
          <TableCell>
            <UserRowActions data-userId={user.id}/>
          </TableCell>
      </TableRow>
    );
}