// backend/routes/parkingSpaces.js
const express = require('express');
const ParkingSpace = require('../models/ParkingSpace');

const router = express.Router();

// Get all parking spaces
router.get('/', async (req, res) => {
  try {
    const parkingSpaces = await ParkingSpace.find();
    res.json(parkingSpaces);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new parking space
router.post('/', async (req, res) => {
  const parkingSpace = new ParkingSpace({
    type: req.body.type,
    available: req.body.available,
  });

  try {
    const newParkingSpace = await parkingSpace.save();
    res.status(201).json(newParkingSpace);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;