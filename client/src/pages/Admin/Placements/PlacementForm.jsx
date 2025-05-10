import React, { useState, useEffect } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';

export default function PlacementForm({ initialData, onSave, onCancel }) {
  const data = initialData || {};
  const isEdit = Boolean(data._id);

  const [name, setName] = useState(data.name || '');
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');

  useEffect(() => {
    if (isEdit) {
      setPreview(`http://localhost:5001/uploads/${data.image}`);
    }
  }, [data, isEdit]);

  useEffect(() => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    if (file) formData.append('image', file);

    try {
      const url = isEdit
        ? `http://localhost:5001/placement/update/${data._id}`
        : 'http://localhost:5001/placement/create';
      const method = isEdit ? 'PUT' : 'POST';

      const res = await fetch(url, { method, body: formData });
      const saved = await res.json();
      onSave(saved);
    } catch (err) {
      console.error('Save failed:', err);
      alert('Could not save placement.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <TextField
        label="Company Name"
        value={name}
        onChange={e => setName(e.target.value)}
        fullWidth
        required
      />
      {preview && (
        <Box>
          <Typography variant="subtitle2">{isEdit ? 'Current Logo' : 'Preview'}</Typography>
          <img src={preview} alt="preview" className="h-24 rounded mb-2" />
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
        <Button variant="outlined" onClick={onCancel}>Cancel</Button>
      </Box>
    </form>
  );
}
