//declaring variables to reference the necessary HTML elements in index.html:
bookList = document.getElementById('book-list');
const addBookForm = document.getElementById('add-book-form');
const updateBookForm = document.getElementById('update-book-form');


//function to fetch all books from the server and display them in the book list:
async function fetchBooks() {
    try {
      const response = await fetch('http://localhost:3000/books');
      const books = await response.json();
      // Clear existing book list content
      bookList.textContent = '';
      // Add each book to the book list as a li element
      books.forEach((book) => {
        const bookItem = document.createElement('li');
        bookItem.textContent = `${book.title} by ${book.author}`;
        bookList.appendChild(bookItem);
      });
    } catch (error) {
      console.error(error.message);
    }
  }
  //calling above async function to display the book list when the page is loaded:
  //now adding  an event listener to the add book 
  //form to send a POST request to the server when the submit button is clicked:
  addBookForm.addEventListener('subBtn1', async (event) => {
    event.preventDefault();
    const title = addBookForm.title.value;
    const isbn = addBookForm.isbn.value;
    const publishedDate = addBookForm.publishedDate.value;
    const author = addBookForm.author.value;
    try {
      const response = await fetch('http://localhost:3000/books/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, isbn, publishedDate, author }),
      });
      const newBook = await response.json();
      console.log(`New book added: ${newBook.title} by ${newBook.author}`);
      // Clear form inputs after submission
      addBookForm.reset();
      // Refresh book list after submission
      fetchBooks();
    } catch (error) {
      console.error(error.message);
    }
  });
  //event listener to the update book form to send a PUT request to the server when the update button is clicked:
  updateBookForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const id = updateBookForm.id.value;
    const title = updateBookForm.title.value;
    const isbn = updateBookForm.isbn.value;
    const publishedDate = updateBookForm.publishedDate.value;
    const author = updateBookForm.author.value;
    try {
      const response = await fetch(`<server-url>/books/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, isbn, publishedDate, author }),
      });
      const updatedBook = await response.json();
      console.log(`Book updated: ${updatedBook.title} by ${updatedBook.author}`);
      // Clear form inputs after submission
      updateBookForm.reset();
      // Refresh book list after submission
      fetchBooks();
    } catch (error) {
      console.error(error.message);
    }
  });
  //Finally, add an event listener to the book list to send a DELETE 
  //request to the server when the delete button is clicked for a book:
  bookList.addEventListener('click', async (event) => {
    if (event.target.matches('.delete-button')) {
      const bookItem = event.target.parentElement;
      const id = bookItem.dataset.id;
      try {
        const response = await fetch(`<server-url>/books/${id}`, {
          method: 'DELETE',
        });
        const deletedBook = await response.json();
        console.log(`Book deleted: ${deletedBook.title} by ${deletedBook.author}`);
        // Remove deleted book from book list
        bookList.removeChild(bookItem);
      } catch (error) {
        console.error(error.message);
      }
    }
  });

fetchBooks();
