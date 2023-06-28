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

// References to HTML elements
const addBookBtn = document.getElementById("add-book-btn");
const overlay = document.getElementById("overlay");
const addBookPopUp = document.querySelector(".add-book-pop-up");
const formBtn = document.getElementById("add-book-form-btn")
const resetBtn = document.getElementById("reset-btn")
const readCheckBox = document.getElementById("read");
const review = document.querySelector(".review");
const totalBooks = document.getElementById("total-books-value");
const readBooks = document.getElementById("read-books-value");
const ratingSlider = document.getElementById("rating-slider");
const ratingValue = document.getElementById("rating-value");

// Global variables
let totalBooksValue = 0;
let readBooksValue = 0;
let rating = 3;

// ***** Function to add book to library
function addBookToLibrary() {
  // ...
};

// ***** Function to display each book on its own card
function displayBooks() {
    myLibrary.forEach((book) => {
        // ...
    });
};

// ***** Function to update summary data (totalBooksValue and readBooksValue + update textContent)
    // need to consider books being added / removed and also being checked / unchecked as read on their cards


// Add event listener (click) to addBookBtn to open addBookPopUp and add overlay
function openAddBookPopUp() {
    addBookBtn.addEventListener("click", () => {
        addBookPopUp.classList.add("active");
        overlay.classList.add("active");
    });
};

// ***** Add event listener (click) to formBtn and overlay to close addBookPopUp and remove overlay
function closeAddBookPopUp() {
    formBtn.addEventListener("click", () => {
        // add an if statement for the form validation or change event listener to something to do with submitting (since that will only be allowed after form is validated)
        addBookPopUp.classList.remove("active");
        overlay.classList.remove("active");

        // also need to call function/s to create book object from inputted data
    });

    overlay.addEventListener("click", () => {
        addBookPopUp.classList.remove("active");
        overlay.classList.remove("active");
    });
};

// ***** Add event listener (click) to resetBtn to reset any inputted book data
function resetBookData() {
    resetBtn.addEventListener("click", () => {
        // ...
    });
};

// Add event listener (change) to readCheckBox to make the review div appear or disappear
function toggleReviewFields() {
    readCheckBox.addEventListener("change", () => {
        if (readCheckBox.checked == true) {
            review.classList.add("active");
        } else {
            review.classList.remove("active");
        };
    });
};

// Add event listener (input) to ratingSlider
function changeRating() {
    ratingSlider.addEventListener("input", () => {
        console.log(ratingSlider.value);
        rating = ratingSlider.value;
        ratingValue.textContent = rating;
    });
};

// ***** Add event listener (click) to removeBtn on book cards


// Initialization
openAddBookPopUp();
closeAddBookPopUp();
resetBookData();
toggleReviewFields();
changeRating();
totalBooks.textContent = totalBooksValue;   // ***** might need to reconsider setting these to zero initially?
readBooks.textContent = readBooksValue;
ratingValue.textContent = rating;