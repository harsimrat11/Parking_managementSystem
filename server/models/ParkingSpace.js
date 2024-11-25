// backend/models/ParkingSpace.js
const mongoose = require('mongoose');

const parkingSpaceSchema = new mongoose.Schema({
  type: { type: String, required: true }, // e.g., "2 Wheeler", "3 Wheeler", "4 Wheeler"
  available: { type: Number, required: true }, // Number of available spaces
});

module.exports = mongoose.model('ParkingSpace', parkingSpaceSchema);