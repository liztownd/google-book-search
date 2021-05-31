import React from 'react'
import SearchForm from '../components/SearchForm'
import BookList from '../components/BookList'


function Search() {
    

    return (
        <div>
            <h1>Search for books:</h1>
            <SearchForm/>
            <hr className="75"/>
            <BookList/>
        </div>
    )
}

export default Search
