import React from 'react';

export function UserRoleList({
  data,
}) {
    return (
      <div>{data.join(',')}</div>
    );
}