import React from 'react';
import TableRow1 from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { UserRowActions } from '../';

import { UserRoleList } from '../';

export function UserRow({
  data: {
    userName,
    userId,
    userRoles,
  },
}) {
    return (
      <TableRow1>
          <TableCell component="th" scope="row">
            {userName}
            <UserRowActions />
          </TableCell>
          <TableCell align="right">
            <UserRoleList data={userRoles} />
          </TableCell>
      </TableRow1>
    );
}