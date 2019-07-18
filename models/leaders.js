const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema or table for dishes
const leaderSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true
  },
  abbr: {
    type: String,
    default: ''
  },
  designation: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false
  }
},{
  timestamp: true
});

var Leader = mongoose.model('Leader', leaderSchema);
module.exports = Leader;
