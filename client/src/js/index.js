import store from '../utils/store';
import { addBook, getBooks, deleteBook } from "../utils/actions";

window.store = store;
window.addBook = addBook;
window.getBooks = getBooks;
window.deleteBook = deleteBook;