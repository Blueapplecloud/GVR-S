import React, { useState, useEffect } from 'react';
import SideNav from "../../../Reusable Components/SideNav";
import { Button, Box, Typography } from '@mui/material';
import PlacementForm from './PlacementForm';
import PlacementList from './PlacementList';

function Placements() {
  const [showForm, setShowForm] = useState(false);
  const [placements, setPlacements] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const fetchPlacements = async () => {
    try {
      const res = await fetch('http://localhost:5001/placement/all');
      const data = await res.json();
      setPlacements(data);
    } catch (err) {
      console.error('Failed to fetch placements:', err);
    }
  };

  useEffect(() => {
    fetchPlacements();
  }, []);

  const handleAdd = () => {
    setEditingItem(null);
    setShowForm(true);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setShowForm(true);
  };

  const handleSave = (record) => {
    const updated = placements.map(p => (p._id === record._id ? record : p));
    if (!placements.some(p => p._id === record._id)) {
      updated.unshift(record);
    }
    setPlacements(updated);
    setShowForm(false);
    setEditingItem(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this placement?')) return;
    try {
      await fetch(`http://localhost:5001/placement/delete/${id}`, { method: 'DELETE' });
      setPlacements(prev => prev.filter(item => item._id !== id));
    } catch (err) {
      console.error('Delete failed:', err);
      alert('Could not delete placement.');
    }
  };

  return (
    <Box className="flex container h-full">
      <SideNav />
      <Box className="flex-1 flex flex-col p-6">
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={4}>
          <Typography variant="h4">Placements</Typography>
          <Button
            onClick={handleAdd}
            variant="contained"
            className="!bg-primaryColor hover:!bg-gray-500 text-white"
          >
            Add
          </Button>
        </Box>
        {showForm ? (
          <PlacementForm
            initialData={editingItem}
            onSave={handleSave}
            onCancel={() => {
              setShowForm(false);
              setEditingItem(null);
            }}
          />
        ) : (
          <PlacementList
            placements={placements}
            setPlacements={setPlacements}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </Box>
    </Box>
  );
}

export default Placements;
