function getBooks(payload){
    return { type: 'GET_BOOKS', payload}
}

function addBook(payload){
    return { type: 'ADD_BOOK', payload}
}

function deleteBook(payload){
    return { type: 'DELETE_BOOK', payload}
}

export default { getBooks, addBook, deleteBook };