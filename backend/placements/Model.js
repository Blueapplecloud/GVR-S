// models/Model.js
import { Schema, model } from 'mongoose';

const placementSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  logo: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default model('Placement', placementSchema);
