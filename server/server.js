// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Importing CORS
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Parking Management System API');
});

// Import parkingSpacesRouter
const parkingSpacesRouter = require('./routes/parkingSpaces');

// Use the parkingSpacesRouter for the /api/parking-spaces endpoint
app.use('/api/parking -spaces', parkingSpacesRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});