// placement.controller.js
const Placement = require("../DB/models/Placement.model");

// GET all placements
const getAllPlacements = async (req, res) => {
  try {
    const placements = await Placement.find().sort({ createdAt: -1 });
    res.json(placements);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error fetching placements" });
  }
};

// CREATE a placement
const createPlacement = async (req, res) => {
  const { name } = req.body;
  const image = req.file?.filename;

  if (!name || !image) {
    return res.status(400).json({ error: "Name and image are required" });
  }

  try {
    const newPlacement = new Placement({ name, image });
    const saved = await newPlacement.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error creating placement" });
  }
};

// UPDATE a placement
const updatePlacement = async (req, res) => {
  try {
    const { name } = req.body;
    const update = { name };

    if (req.file) {
      update.image = req.file.filename;
    }

    const updated = await Placement.findByIdAndUpdate(req.params.id, update, {
      new: true,
    });
    if (!updated) {
      return res.status(404).json({ error: "Placement not found" });
    }

    res.json(updated);
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ error: "Server error during update" });
  }
};

// DELETE a placement
const deletePlacement = async (req, res) => {
  try {
    const deleted = await Placement.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Not found" });

    res.json({ message: "Deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error deleting placement" });
  }
};

module.exports = {
  getAllPlacements,
  createPlacement,
  updatePlacement,
  deletePlacement,
};
