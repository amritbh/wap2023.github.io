const express = require('express');
const bodyParser = require('body-parser');
const books = require('./books');
const router = express.Router();

router.use(bodyParser.json());

router.route('/')
  // Get all books
  .get((req, res, next) => {
    res.json(books);
  })
  // Create a new book
  .post((req, res, next) => {
    const book = req.body;
    book.id = books.length + 1;
    if (!book.title || !book.author || !book.ISBN || !book.publishedDate)
   // If any of the required fields are missing, a 400 status code is returned 
    return res.status(400).send('Missing fields.');
    books.push(book);
    res.status(201).json(book);//201 status code is returned with the newly created book object.
  })
 
router.route('/:bookId')
  // Get a book by ID
  .get((req, res, next) => {
    const bookId = parseInt(req.params.bookId);
    const book = books.find((book) => book.id === bookId);
    if (book) {
      res.status(200).json(book);
    } else {
      //res.sendStatus(404);
      res.status(400).send('Book not found.');
    }
  })
  // Update a book by ID
  .put((req, res, next) => {
    const bookId = parseInt(req.params.bookId);
    const bookIndex = books.findIndex((book) => book.id === bookId);
    if (bookIndex !== -1) {
      const updatedBook = { ...books[bookIndex], ...req.body };
      books[bookIndex] = updatedBook;
      res.json(updatedBook);
    } else {
      res.sendStatus(404);
    }
  })
  // Delete a book by ID
  .delete((req, res, next) => {
    const bookId = parseInt(req.params.bookId);
    const bookIndex = books.findIndex((book) => book.id === bookId);
    if (bookIndex !== -1) {
      books.splice(bookIndex, 1);
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  });

module.exports = router;