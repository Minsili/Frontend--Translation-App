import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]); // Initialize users as an empty array

  useEffect(() => {
    axios.get('/api/users')
      .then(response => {
        if (Array.isArray(response.data)) {
          setUsers(response.data); // Set users if it's an array
        } else {
          setUsers([]); // Handle non-array data
        }
      })
      .catch(error => {
        console.error(error);
        setUsers([]); // Handle errors by setting users to an empty array
      });
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(users) && users.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Users;
