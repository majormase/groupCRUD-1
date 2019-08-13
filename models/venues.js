const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
  name: String,
  date: String,
  url: String,
  image: String
});

const Venues = mongoose.model('Venue', venueSchema);

module.exports = Venues;
