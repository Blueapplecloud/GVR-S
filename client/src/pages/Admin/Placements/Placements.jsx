import React, { useState, useEffect } from 'react';
import SideNav from "../../../Reusable Components/SideNav";
import { Button, Box, Typography } from '@mui/material';
import PlacementForm from './PlacementForm';
import List from './List';

export default function Placements() {
  const [showForm, setShowForm] = useState(false);
  const [placements, setPlacements] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // 1) Load all placements on mount
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
  }, []);

  // 2) Open add form
  const handleAdd = () => {
    setEditingId(null);
    setShowForm(true);
  };

  // 3) Open edit form
  const handleEdit = id => {
    setEditingId(id);
    setShowForm(true);
  };

  // 4) Save (create or update)
  const handleSave = record => {
    setPlacements(prev => {
      if (record._id) {
        // Update existing placement
        return prev.map(item => (item._id === record._id ? record : item));
      } else {
        // Add new placement
        return [record, ...prev];
      }
    });
    setShowForm(false);
    setEditingId(null);
  };

  // 5) Delete
  const handleDelete = async id => {
    if (!window.confirm('Are you sure you want to delete this placement?')) return;
    try {
      const res = await fetch(`http://localhost:3001/api/placement/${id}`, {
        method: 'DELETE'
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      setPlacements(pl => pl.filter(item => item._id !== id));
    } catch (err) {
      console.error('Delete failed:', err);
      alert('Could not delete placement.');
    }
  };

  // Find the record being edited
  const initialData = editingId
    ? placements.find(item => item._id === editingId) || null
    : null;

  return (
    <Box className="flex container h-full">
      <SideNav />

      <Box className="flex-1 flex flex-col p-6">
        {/* Header */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={4}
        >
          <Typography variant="h4">Placements</Typography>
          <Button
            onClick={handleAdd}
            variant="contained"
            className="!bg-primaryColor hover:!bg-gray-500 text-white"
          >
            Add
          </Button>
        </Box>

        {/* Either Form or List */}
        {showForm ? (
          <PlacementForm
            initialData={initialData}
            onSave={handleSave}
            onCancel={() => {
              setShowForm(false);
              setEditingId(null);
            }}
          />
        ) : (
          <List
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
