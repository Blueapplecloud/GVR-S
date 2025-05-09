import React, { useState, useEffect } from 'react';
import { Button, TextField, Box, Typography,Form } from '@mui/material';

export default function PlacementForm({ initialData, onSave, onCancel }) {
  // Ensure initialData is an object
  const data = initialData || {};
  const isEdit = Boolean(data._id);

  const [name, setName] = useState(data.name || '');
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');

  // Initialize form when data changes or on mount
  useEffect(() => {
    if (isEdit) {
      setName(data.name || '');
      setPreview(data.logo || '');
    } else {
      setName('');
      setPreview('');
    }
    setFile(null);
  }, [data, isEdit]);

  // Generate preview when a new file is picked
  useEffect(() => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append('name', name);
    if (file) payload.append('image', file);

    try {
      const url = isEdit
        ? `http://localhost:3001/api/placement/${data._id}`
        : 'http://localhost:3001/api/placement/create';
      const method = isEdit ? 'PUT' : 'POST';

      const res = await fetch(url, { method, body: payload });
      if (!res.ok) throw new Error(`Server responded ${res.status}`);
      const saved = await res.json();
      onSave(saved);
    } catch (err) {
      console.error('Save failed:', err);
      alert('Could not save placement.');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <TextField
        label="Company Name"
        value={name}
        onChange={e => setName(e.target.value)}
        fullWidth
        required
      />

      {preview && (
        <Box>
          <Typography variant="subtitle2">
            {isEdit ? 'Current Logo' : 'Preview'}
          </Typography>
          <img
            src={preview}
            alt="preview"
            className="h-24 rounded mb-2"
          />
        </Box>
      )}

      <Box>
        <Button variant="outlined" component="label">
          {isEdit ? 'Change Logo' : 'Upload Logo'}
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={e => setFile(e.target.files[0] || null)}
          />
        </Button>
      </Box>

      <Box display="flex" gap={2} mt={2}>
        <Button type="submit" variant="contained" className="!bg-primaryColor">
          {isEdit ? 'Update' : 'Save'}
        </Button>
        <Button variant="outlined" onClick={onCancel}>
          Cancel
        </Button>
      </Box>
    </Form>
  );
}
