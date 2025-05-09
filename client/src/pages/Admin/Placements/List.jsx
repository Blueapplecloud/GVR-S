import React, { useEffect } from 'react';
import {
  Table, TableHead, TableRow, TableCell,
  TableBody, Button, Typography
} from '@mui/material';
import axios from 'axios';

export default function List({ placements, setPlacements, onEdit }) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:3001/api/placement/all');
        setPlacements(data);
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };
    fetchData();
  }, [setPlacements]);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this placement?')) return;
    try {
      await axios.delete(`http://localhost:3001/api/placement/${id}`);
      setPlacements(prev => prev.filter(p => p._id !== id));
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  if (!placements?.length) {
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
                src={`http://localhost:3001/uploads/${item.logo}`}
                alt={item.name}
                className="h-10 w-auto rounded"
              />
            </TableCell>
            <TableCell align="right">
              <Button
                size="small"
                variant="outlined"
                className="!mr-2"
                onClick={() => onEdit(item)} // Pass the entire item object
              >
                Edit
              </Button>
              <Button
                size="small"
                variant="outlined"
                color="error"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
