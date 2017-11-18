const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: { type: String },
  author: { type: String },
  isbn: { type: String },
  publisher: { type: String }
});

module.exports = mongoose.model('Book', bookSchema);