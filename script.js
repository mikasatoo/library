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
const overlay = document.getElementById("overlay");
const addBookPopUp = document.querySelector(".add-book-pop-up");
const totalBooks = document.getElementById("total-books-value");
const readBooks = document.getElementById("read-books-value");

const form = document.getElementById("add-book-form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const imageLink = document.getElementById("image-link");
const pages = document.getElementById("pages");
const genreOptions = document.getElementById("genres").options;
const readCheckBox = document.getElementById("read");
const review = document.querySelector(".review");
const ratingSlider = document.getElementById("rating-slider");
const ratingValue = document.getElementById("rating-value");
const reviewText = document.getElementById("review-text");

const addBookBtn = document.getElementById("add-book-btn");
const resetBtn = document.getElementById("reset-btn");

// Global variables
let totalBooksValue = myLibrary.length;
let readBooksValue = 0;     // ***** edit this
let rating = ratingSlider.value;

// Create new book object and add to myLibrary array
function createNewBook() {
    let selectedGenres = [];
    for (let i = 0; i < genreOptions.length; i++) {
        if (genreOptions[i].selected) {
            selectedGenres.push(genreOptions[i].textContent);
        };
    };

    let book = new Book(
        title.value,
        author.value,
        imageLink.value,
        pages.value,
        readCheckBox.checked,
        ratingSlider.value,
        reviewText.value,
        selectedGenres
    );
    console.log(book);
    
    myLibrary.push(book);
};

// Reset any book data in the form
function resetFormData() {
    title.value = "";
    author.value = "";
    imageLink.value = "";
    pages.value = "";

    for (let i = 0; i < genreOptions.length; i++) {
        genreOptions[i].selected = false;
    };

    readCheckBox.checked = false;
    review.classList.remove("active");
    ratingSlider.value = 3;
    ratingValue.textContent = 3;
    reviewText.value = "";
};

// ***** Function to display each book on its own card
function displayBooks() {
    myLibrary.forEach((book) => {
        // ...
        // use the .getGenres() function to get the bookGenres list from the genres array
    });
};

// ***** Function to update summary info (totalBooksValue and readBooksValue + update textContent)
    // need to consider books being added / removed and also being checked / unchecked as read on their cards
function updateSummary() {
    // ...
};


// * EVENT LISTENER FUNCTIONS *

// Open "Add new book" pop-up and add overlay when user clicks "+ Add new book" button
function openAddBookPopUp() {
    addBookBtn.addEventListener("click", () => {
        addBookPopUp.classList.add("active");
        overlay.classList.add("active");
    });
};

// Close "Add new book" pop-up if user clicks outside of it
function closeAddBookPopUp() {
    overlay.addEventListener("click", () => {
        addBookPopUp.classList.remove("active");
        overlay.classList.remove("active");
    });
};

// Close addBookPopUp, remove overlay, and add new book (and then reset data) when user submits the form
function submitNewBook() {
    form.addEventListener("submit", () => {
        addBookPopUp.classList.remove("active");
        overlay.classList.remove("active");
        createNewBook();
        resetFormData();
    });
};

// Make review div appear or disappear when user changes the "Have you read this book?" checkbox
function toggleReviewFields() {
    readCheckBox.addEventListener("change", () => {
        if (readCheckBox.checked) {
            review.classList.add("active");
        } else {
            review.classList.remove("active");
        };
    });
};

// Update rating value display when the slider is moved
function changeRating() {
    ratingSlider.addEventListener("input", () => {
        rating = ratingSlider.value;
        ratingValue.textContent = rating;
    });
};

// Reset any book data in the form when user clicks "Reset info" button
resetBtn.addEventListener("click", resetFormData);

// Remove book from library if user clicks "Remove" button on the book card
function removeBook() {
    // ***** delete card and also remove from myLibrary array (and update summary info)

};


// * INITIALIZATION *
openAddBookPopUp();
closeAddBookPopUp();
submitNewBook();
toggleReviewFields();
changeRating();
removeBook();

totalBooks.textContent = totalBooksValue;
readBooks.textContent = readBooksValue;
ratingValue.textContent = rating;