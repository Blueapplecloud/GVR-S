const mongoose = require("mongoose");

const placementSchema =  new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Placement = mongoose.model('Placement', placementSchema);
module.exports = Placement;
