import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  clicks: {
    type: Number,
    required: false,
  },
});

const Location = mongoose.model('Locations', locationSchema);

module.exports = Location;
