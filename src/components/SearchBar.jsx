import React, { Component } from 'react';
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (<div className="searchbar-container">
            <input type="text" className="searchbar" onChange={(e)=>{this.props.findMovies(e.target.value)}}/>
        </div>  );
    }
}
 
export default SearchBar;