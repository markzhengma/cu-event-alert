import React from 'react';

const SearchBox = (props) => {
    return (
        <div className = 'search-box'>
            <div className = 'search-box-content'>
                <h4>Find your next CU experience...</h4>
                <div className = 'search-bar'>
                    <form>
                        <input type = 'text' name = 'keyword' placeholder = 'Keyword' />
                        <input type = 'text' name = 'organizer' placeholder = 'Organizer' />
                        <input type = 'date' name = 'date' placeholder = 'Date' />
                        <button type = 'submit'>Search</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchBox;