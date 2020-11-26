import { key } from "../utils/constants.js";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/localStorage.js";
import createListBooks from "./createListBooks.js";

let localStoragedBooks = getFromLocalStorage(key);

export default function deleteFromListBooks(event) {

    const deleteThisBook = event.target.dataset.item;

    const newBook = localStoragedBooks.filter(x => x.isbn !== deleteThisBook);

    localStoragedBooks = newBook;


    createListBooks(localStoragedBooks);
    saveToLocalStorage(key, localStoragedBooks);
}