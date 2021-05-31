
const initialState = {
    books: []
};

function rootReducer(state = initialState, action) {
    if (action.type === 'GET_BOOKS'){
        return Object.assign({}, state, {
            books: state.books.concat(action.payload)
        })    
    }
    else if (action.type === 'ADD_BOOK') {
        return Object.assign({}, state, {
            books: state.books.concat(action.payload)
        })    
    }
    else if (action.type === 'DELETE_BOOK') {
        // find book by id and remove from state
    }
    return state;
};

export default rootReducer;