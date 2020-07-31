import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { UserRoleList } from '../';

export function UserRow({
  data: {
    userName,
    userId,
    userRoles,
  },
}) {
    return (
      <TableRow>
          <TableCell component="th" scope="row">
            {userName}
          </TableCell>
          <TableCell align="right">
            <UserRoleList data={userRoles} />
          </TableCell>
      </TableRow>
    );
}