const express = require('express');
const booksRouter = require('./booksRouter');
const app = express();

app.use('/books', booksRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});