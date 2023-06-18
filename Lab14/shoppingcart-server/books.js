/**
 * Crearte project shoppingcart-server from everything from scrtach.
1. Run "npm install" under shoppingcart-server to get express package installed.
2. Implement the features below inside shoppingcart-server REST applicaiton
3. CRUD(create, read, update, delete) books: make sure you use the proper 
    1) URLs and HTTP Methods
    2) A book has properties: id, title, ISBN, publishedDate, author
    3) make proper changes in js files to implement the step 1 features
    4) Use Postman to test your REST APIs
 */
let books = [
    {
        id: 1,
        title: "Java Script",
        ISBN: "978-0062315007",
        publishedDate: "April 16 2013",
        author: "Amrit Bhattarai"
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        ISBN: "978-0446310789",
        publishedDate: "October 11, 1988",
        author: "Harper Lee"
      },
      {
        id: 3,
        title: "The Catcher in the Rye",
        ISBN: "978-0316769488",
        publishedDate: "May 1, 1991",
        author: "J.D. Salinger"
      },

];
module.exports = books;