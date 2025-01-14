const mongoose = require('mongoose');

const pageViewSchema = new mongoose.Schema({
  page: { type: String, required: true }, // The page URL or name
  timestamp: { type: Date, default: Date.now }, // Auto-generated timestamp
});

module.exports = mongoose.model('PageView', pageViewSchema);
