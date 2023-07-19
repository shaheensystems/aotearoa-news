const mongoose = require('mongoose');

// Define schema and model for news reporters
const reporterSchema = new mongoose.Schema({
  name: String,
  email: String
});

module.exports = mongoose.model('Reporter', reporterSchema);
