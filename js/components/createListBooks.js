import deleteFromListBooks from "./deleteFromListBooks.js";
import displayWarning from "./displayWarning.js";



export default function createList(books) {

    const booksContainer = document.querySelector(".books");

    booksContainer.innerHTML = "";

    if (books.length === 0) {
        displayWarning("warning", "There is no book on list. Please write name of book and press 'Add' button!", ".books");
    }

    books.forEach(function(book) {

        booksContainer.innerHTML += `<li>
                                        <span>${book.title}</span>
                                        <i class="fa fa-trash" data-item="${book.isbn}"></i>
                                    </li>`;
    });

    const trashIcon = document.querySelectorAll("li i");

    trashIcon.forEach(can => {
        can.addEventListener("click", deleteFromListBooks);
    });

}