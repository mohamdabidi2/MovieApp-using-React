import React from 'react';
import SearchBar from './SearchBar';

const Header = (props) => {
    return ( <div className="header">
        <SearchBar  moviesTocard={props.Movies} findMovies={props.findMovies}/>
    </div> );
}
 
export default Header;