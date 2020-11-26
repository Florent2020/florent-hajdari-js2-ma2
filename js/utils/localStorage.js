export function saveToLocalStorage(key, books) {
    localStorage.setItem(key, JSON.stringify(books));
}

export function getFromLocalStorage(key) {

    const books = localStorage.getItem(key);

    if (!books) {
        return [];
    }
    return JSON.parse(books);
}