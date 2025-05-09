import { Router } from 'express';
import upload from "../config/multerConfig.js" // Adjust the path based on your project
import Placement from './Model.js';

const router = Router();

// GET /api/placement/all
router.get('/all', async (req, res) => {
  try {
    const placements = await Placement.find().sort({ createdAt: -1 });
    res.json(placements);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error fetching placements' });
  }
});

// POST /api/placement/create — with image upload
router.post('/create', upload.single('image'), async (req, res) => {
  const { name } = req.body;
  const image = req.file?.filename;

  if (!name || !image) {
    return res.status(400).json({ error: 'Name and image are required' });
  }
  try {
    const newPlacement = new Placement({ name, logo: image });
    const saved = await newPlacement.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error creating placement' });
  }
});

// UPDATE
// UPDATE Placement (PUT /api/placement/update/:id)
router.put('/update/:id', upload.single('image'), async (req, res) => {
  try {
    const { name } = req.body;
    const update = { name };

    if (req.file) {
      update.logo = req.file.filename; // Store only the filename
    }

    const updated = await Placement.findByIdAndUpdate(req.params.id, update, { new: true });
    if (!updated) {
      return res.status(404).json({ error: 'Placement not found' });
    }

    res.json(updated);
  } catch (err) {
    console.error('Update error:', err);
    res.status(500).json({ error: 'Server error during update' });
  }
});


// DELETE /api/placement/:id
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Placement.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error deleting placement' });
  }
});

export default router;
