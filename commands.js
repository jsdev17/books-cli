#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const {
  addBook,
  findBook,
  updateBook,
  removeBook,
  listBooks
} = require('./index');

// Book Questions
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Book Title'
  },
  {
    type: 'input',
    name: 'author',
    message: 'Book Author'
  },
  {
    type: 'input',
    name: 'isbn',
    message: 'Book ISBN (null if not available)'
  },
  {
    type: 'input',
    name: 'publisher',
    message: 'Book Publisher'
  }
]

program
  .version('1.0.0')
  .description('Library Management System');

// program
//   .command('add <fistname> <lastname> <phone> <email>')
//   .alias('a')
//   .description('Add a customer')
//   .action((firstName, lastName, phone, email) => {
//     addCustomer({firstName, lastName, phone, email});
//   });

// Add command
program
  .command('add')
  .alias('a')
  .description('Add a book')
  .action(() => {
    prompt(questions).then(answers => addBook(answers))
  });

// Find command
program
  .command('find <identifier>')
  .alias('f')
  .description('Find a book')
  .action(identifier => findBook(identifier));

// Update command
program
.command('update <_id>')
.alias('u')
.description('Update a book')
.action(_id => {
  prompt(questions).then(answers => updateBook(_id, answers))
});

// Remove command
program
.command('remove <_id>')
.alias('r')
.description('Remove a book')
.action(_id => removeBook(_id));

// List command
program
.command('list')
.alias('l')
.description('List all books')
.action(_id => listBooks());


program.parse(process.argv);