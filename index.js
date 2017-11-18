const mongoose  = require('mongoose');

// Map global promise to get rid of warning
mongoose.Promise = global.Promise;

// Connect to DB
var db = mongoose.connect('mongodb://localhost:27017/books_cli', {
  useMongoClient: true
});

// Import model
const Book = require('./models/book');

// Add book
const addBook = (book) => {
  Book.create(book).then(book => {
    console.info('New book added.');
    db.close();
  })
}

// Find book
const findBook = (identifier) => {
  // Make case insensitive
  const search = new RegExp(identifier, 'i');
  Book.find({$or: [{title: search},{author: search}]})
  .then(book => {
    console.info(book);
    console.info(`${book.length} matches`);
    db.close();
  });
}

// Update book
const updateBook = (_id, book) => {
  Book.update({ _id }, book)
  .then(book => {
    console.info('Book Updated');
    db.close();
  });
}

// Remove book
const removeBook = (_id) => {
  Book.remove({ _id })
  .then(book => {
    console.info('Book Removed');
    db.close();
  });
}

// List Books
const listBooks = () => {
  Book.find()
    .then(books => {
      console.info(books);
      console.info(`${books.length} books`);
      db.close()
    });
}

// Export all methods
module.exports = {
  addBook,
  findBook,
  updateBook,
  removeBook,
  listBooks
}