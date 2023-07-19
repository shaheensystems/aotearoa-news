const mongoose = require('mongoose');

// Define schema and model for news articles
const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  reporter: { type: mongoose.Schema.Types.ObjectId, ref: 'Reporter' },
  topic: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Article', articleSchema);
