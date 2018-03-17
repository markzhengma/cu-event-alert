import React, { Component } from 'react';

class SearchBox extends Component {
    constructor(){
        super();
        this.state = {
            isAdvanced: false,
            keyword: null,
            organizer: null,
            date: null,
        }
    }

    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }

    render(){
        return (
            <div className = 'search-box'>
                <div className = 'search-box-content'>
                    <h4>Find your next CU experience...</h4>
                    <div className = 'search-bar'>
                        <form>
                            <input type = 'text' name = 'keyword' placeholder = 'Keyword' onChange = {this.handleInputChange}/>
                            <input type = 'text' name = 'organizer' placeholder = 'Organizer' onChange = {this.handleInputChange}/>
                            <input type = 'date' name = 'date' placeholder = 'Date' onChange = {this.handleInputChange}/>
                            <button type = 'submit'>Search</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBox;