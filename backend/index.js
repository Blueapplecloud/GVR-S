import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import placementRoutes from './placements/Routes.js';
const path = require('path');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Sample route
app.get('/', (req, res) => {
    res.send('API is running...');
    // console.log("*req*",req);
});

// All Routes
app.use('/api/placement', placementRoutes);
// app.use('/api', areaRoutes);


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('✅ MongoDB Connected'))
.catch((error) => console.error('DB Connection Error:', error));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
