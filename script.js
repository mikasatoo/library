// "myLibrary" array
let myLibrary = [];

// "Book" object constructor
function Book(title, author, link, pages, read, rating, review, ...genres) {
  this.title = title
  this.author = author
  this.link = link
  this.pages = pages
  this.read = read
  this.rating = rating
  this.review = review
  this.genres = [...genres]
};

Book.prototype.getGenres = function() {
    let bookGenres = "";

    if (genres[0] !== "") {
        bookGenres = genres[0];
    };

    if (genres.length > 1) {
        for (let i = 1; i < genres.length; i++) {
            bookGenres += ", " + genres[i];
        };
    };
};

// ***** Function to add book to library
function addBookToLibrary() {
  // ...
};

// References to HTML elements
const addBookBtn = document.getElementById("add-book-btn");
const addBookPopUp = document.querySelector(".add-book-pop-up");
const readCheckBox = document.getElementById("read");
const review = document.querySelector(".review");

// Function to add event listener (click) to addBookBtn to make addBookPopUp appear
function makeAddBookAppear() {
    addBookBtn.addEventListener("click", () => {
        addBookPopUp.classList.add("active");
    });
};

// Function to add event listener (change) to readCheckBox to make the review div appear
function makeReviewAppear() {
    readCheckBox.addEventListener("change", () => {
        if (readCheckBox.checked == true) {
            review.classList.add("active");
        } else {
            review.classList.remove("active");
        };
    });
};

// ***** Function to display each book
function displayBooks() {
    myLibrary.forEach((book) => {
        // ...
    })
};



// Initialization
makeAddBookAppear();
makeReviewAppear();
