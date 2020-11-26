import { key } from "./utils/constants.js";
import createListBooks from "./components/createListBooks.js";
import { saveToLocalStorage, getFromLocalStorage } from "./utils/localStorage.js";
import { books } from "./data/data.js";

let generalBooks = getFromLocalStorage(key);

if (generalBooks.length === 0) {
    generalBooks = books;
}

const inputBook = document.querySelector("#inputBooks");
const buttonBook = document.querySelector(".button-primary");

buttonBook.addEventListener("click", addToListBook);
createListBooks(generalBooks);

function addToListBook() {

    const bookName = inputBook.value.trim();

    if (bookName.length > 1) {

        const newBook = { isbn: Date.now().toString(), title: bookName };
        inputBook.value = "";
        inputBook.focus();

        generalBooks = getFromLocalStorage(key);

        if (generalBooks.length === 0) {
            generalBooks = books;
        }

        generalBooks.push(newBook);

        createListBooks(generalBooks);

        saveToLocalStorage(key, generalBooks);
    }
}