import React from 'react';
import {
  Table, TableHead, TableRow, TableCell,
  TableBody, Button, Typography
} from '@mui/material';

export default function PlacementList({ placements, onEdit, onDelete }) {
  if (!placements.length) {
    return <Typography>No placements added yet.</Typography>;
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>#</TableCell>
          <TableCell>Company Name</TableCell>
          <TableCell>Logo</TableCell>
          <TableCell align="right">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {placements.map((item, idx) => (
          <TableRow key={item._id}>
            <TableCell>{idx + 1}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>
              <img
                src={`http://localhost:5001/uploads/${item.image}`}
                alt={item.name}
                className="h-10 w-auto rounded"
              />
            </TableCell>
            <TableCell align="right">
              <Button size="small" variant="outlined" className="!mr-2" onClick={() => onEdit(item)}>
                Edit
              </Button>
              <Button size="small" variant="outlined" color="error" onClick={() => onDelete(item._id)}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
