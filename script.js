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

    if (this.genres[0] !== "") {
        bookGenres = this.genres[0];
    };

    if (this.genres.length > 1) {
        for (let i = 1; i < this.genres.length; i++) {
            bookGenres += ", " + this.genres[i];
        };
    };

    return bookGenres;
};

// References to HTML elements
const overlay = document.getElementById("overlay");
const addBookPopUp = document.querySelector(".add-book-pop-up");
const totalBooks = document.getElementById("total-books-value");
const readBooks = document.getElementById("read-books-value");
const gallery = document.querySelector(".gallery");

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
let readLibrary = myLibrary.filter(book => book.read == true);
let readBooksValue = readLibrary.length;
let rating = ratingSlider.value;

// Create new book object, add to myLibrary array, and call next functions
function createNewBook() {
    // ***** maybe add a check to see if the data entered is the same as an existing book card (e.g. if the title and author are the same) or don't worry?
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
    myLibrary.push(book);

    displayBooks();
    updateSummary();
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

// Display each book in myLibrary on its own card (if it does not already have a book card)
function displayBooks() {
    myLibrary.forEach((book) => {
        let bookId = book.title.toLowerCase();

        if (document.getElementById(bookId) === null) {
            let bookCard = document.createElement("div");
            bookCard.setAttribute("id", bookId);
            bookCard.classList.add("book-card");
            gallery.appendChild(bookCard);

            let title = document.createElement("h2");
            title.textContent = book.title;
            bookCard.appendChild(title);

            // ***** Add image from imageLink below title

            let author = document.createElement("p");
            author.textContent = `Author: ${book.author}`;
            bookCard.appendChild(author);

            let pages = document.createElement("p");
            pages.textContent = `Page count: ${book.pages}`;
            bookCard.appendChild(pages);

            let genres = document.createElement("p");
            genres.textContent = `Genre/s: ${book.getGenres()}`
            bookCard.appendChild(genres);

            // ***** Add read, rating, review fields - want to be able to interact with them on the card as well (similar to the form where they appear or disappear)
        };
    });
};

// Update summary info ("Total books" and "Books read")
function updateSummary() {
    totalBooksValue = myLibrary.length;
    readLibrary = myLibrary.filter(book => book.read == true);
    readBooksValue = readLibrary.length;

    totalBooks.textContent = totalBooksValue;
    readBooks.textContent = readBooksValue;
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

// Mark books as read on their own book cards
function markRead() {
    // ***** change book.read to true, make the review fields show up (similar to toggleReviewFields() above), and call updateSummary()

};

// Remove book from library if user clicks "Remove" button on the book card
function removeBook() {
    // ***** delete card, remove from myLibrary array, and call updateSummary() function

};


// * INITIALIZATION *
openAddBookPopUp();
closeAddBookPopUp();
submitNewBook();
toggleReviewFields();
changeRating();
markRead();
removeBook();

totalBooks.textContent = totalBooksValue;
readBooks.textContent = readBooksValue;
ratingValue.textContent = rating;