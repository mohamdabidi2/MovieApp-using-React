import React from 'react';
import Card from './card';
const Main = (props) => {
    return (
        <div className="main-container main" >
<Card filterMovie={props.filterMovie}  addmovie={props.addmovie} moviesTocard={props.Movies}/>
        </div>
      );
}
 
export default Main;