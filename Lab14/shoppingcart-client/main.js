const bookList = document.getElementById('book-list')
const addBookForm = document.getElementById('add-book-form')

function getAllBooks() {
  fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(books => {
      bookList.innerHTML = ''

      books.forEach(book => {
        const li = document.createElement('li')
        li.innerHTML = `
          <h3>${book.title}</h3>
          <p>Author: ${book.author}</p>
          <p>Published Date: ${book.publishedDate}</p>
          <p>ISBN: ${book.ISBN}</p>
          <button class="edit-button" data-id="${book.id}">Edit</button>
          <button class="delete-button" data-id="${book.id}">Delete</button>
        `
        bookList.appendChild(li)
      })
    })
}

function addBook(event) {
  event.preventDefault()

  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const publishedDate = document.getElementById('publishedDate').value
  const ISBN = document.getElementById('ISBN').value

  const newBook = { title, author, publishedDate, ISBN }

  fetch('http://localhost:3000/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newBook)
  })
    .then(res => res.json())
    .then(book => {
      getAllBooks()
      addBookForm.reset()
    })
}

function editBook(event) {
  const button = event.target
  const bookId = button.getAttribute('data-id')
  const li = button.parentNode

  const title = li.querySelector('h3').innerText
  const author = li.querySelector('p:first-of-type').innerText.split(':')[1].trim()
  const publishedDate = li.querySelector('p:nth-of-type(2)').innerText.split(':')[1].trim()
  const ISBN = li.querySelector('p:nth-of-type(3)').innerText.split(':')[1].trim()

  const updatedBook = {
    title: prompt('Enter the new title:', title),
    author: prompt('Enter the new author:', author),
    publishedDate: prompt('Enter the new published date:', publishedDate),
    ISBN: prompt('Enter the new ISBN:', ISBN)
  }

  fetch(`http://localhost:3000/books/${bookId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedBook)
  })
    .then(res => res.json())
    .then(book => {
      getAllBooks()
    })
}

function deleteBook(event) {
  const button = event.target
  const bookId = button.getAttribute('data-id')

  fetch(`http://localhost:3000/books/${bookId}`, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(message => {
      getAllBooks()
    })
}

getAllBooks()

addBookForm.addEventListener('submit', addBook)
bookList.addEventListener('click', event => {
  if (event.target.classList.contains('edit-button')) {
    editBook(event)
  } else if (event.target.classList.contains('delete-button')) {
    deleteBook(event)
  }
})