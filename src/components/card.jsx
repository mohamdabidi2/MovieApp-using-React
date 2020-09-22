import React, { Component } from 'react';
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pop:"pop-down",
            url:"https://www.acmetek.com/wp-content/uploads/404-error-top-img.png",
            title:""
         }
    }
    Add=()=>{
        this.setState({pop:"pop-up"})
    }

    render() { 
        console.log(this.props.filterMovie)
        return ( 
            <div className="card-container">
<div className="cards">
{this.props.moviesTocard.filter(el=>el.title.toUpperCase().includes(this.props.filterMovie.toUpperCase())).map(el=>
        <div className="card" key={el.id}>
        <img src={el.url} alt="" className="movie-pic"/>
        <p className="movie-title">{el.title}</p>
    </div>
        )}
</div>
                <div className="card cards-add">
                   <p className="card-add"onClick={()=>this.Add()}>+</p>
                </div>
                <div className={this.state.pop}>
                    
                    <input type="text" placeholder="URL" className="addmovies" onChange={(e)=>this.setState({url:e.target.value})}/>
                    <input type="text" placeholder="Title" onChange={(e)=>this.setState({title:e.target.value})} className="addmovies"/>
                    <p className="send" onClick={()=>this.props.addmovie({title:this.state.title,url:this.state.url})}>Add</p>
                    <p onClick={()=>this.setState({pop:"pop-down"})} className="cancel">Cancel</p>
                </div>
            </div>
         );
    }
}
 
export default Card;