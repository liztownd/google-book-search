import React from 'react'

function SearchForm() {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="search">Search</label>
                <input type="search" class="form-control" id="search" aria-describedby="search" />
            </div>
            <button type="submit" class="btn btn-primary">Search</button>
        </form>
    )
}

export default SearchForm
