import React, { useEffect } from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Typography
} from '@mui/material';

export default function List({ placements, setPlacements, onEdit }) {
  // 1) Fetch all placements on mount
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('http://localhost:3001/api/placement/all');
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const data = await res.json();
        setPlacements(data);
      } catch (err) {
        console.error('Failed to fetch placements:', err);
      }
    }
    load();
  }, [setPlacements]);

  // 2) Delete handler calls backend then updates state
  const handleDelete = async id => {
    if (!window.confirm('Are you sure you want to delete this?')) return;
    try {
      const res = await fetch(`http://localhost:3001/api/placement/${id}`, {
        method: 'DELETE'
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      // Remove from local state
      setPlacements(prev => prev.filter(item => item._id !== id));
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  if (!placements || placements.length === 0) {
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
              {/* Ensure the URL is absolute; your backend stored it as http://.../uploads/... */}
              <img
                src={item.logo}
                alt={item.name}
                className="h-10 w-auto rounded"
              />
            </TableCell>
            <TableCell align="right">
              <Button
                size="small"
                variant="outlined"
                className="!mr-2"
                onClick={() => onEdit(idx)}
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
