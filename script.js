// "myLibrary" array
let myLibrary = [];

// "Book" object constructor
function Book(title, author, pages, read, rating, ...genres) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.rating = rating
  this.genres = [...genres]
};

Book.prototype.getGenres = function() {
    let bookGenres = "";

    if (genres[0] !== "") {
        bookGenres = genres[0];
    };

    for (let i = 1; i < genres.length; i++) {
        bookGenres += ", " + genres[i];
    };
};

// ***** Function to add book to library
function addBookToLibrary() {
  // ...
};

// ***** Function to display each book
function displayBooks() {
    myLibrary.forEach((book) => {
        // ...
    })
};