const { addBook } = require('./index');
var data = [
  {
    title: "Algorithms in C++, Parts 1-4: Fundamentals, Data Structures, Sorting, Searching, Third Edition",
    author: "Robert Sedgewick",
    isbn: "9780201350883",
    publisher: "Addison-Wesley"
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoyevsky",
    isbn: null,
    publisher: "Modern Library"
  },
  {
    title: "Eloquent Javascript: A Modern Introduction to Programming, Second Edition",
    author: "Marijin Haverbeke",
    isbn: "9781593275846",
    publisher: "No Starch Press"
  },
  {
    title: "The Origins and History of Consciousness",
    author: "Erich Neumann",
    isbn: "9780691163598",
    publisher: "Princeton Classics"
  },
  {
    title: "The Brain that Changes Itself: Stories of Personal Triumph from the Frontiers of Brain Science",
    author: "Norman Doidge, M.D.",
    isbn: "9780143113102",
    publisher: "Penguin Books"
  },
];

data.forEach((book) => {
  addBook(book);
});
