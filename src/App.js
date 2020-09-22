import React, { Component } from 'react'
import "./App.css"
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      MovieList:[
        {id:1,title:"Critics Consensus", url:"https://resizing.flixster.com/-tXBJ4FFPQfUX84O4j7-mzYGnTg=/206x305/v2/https://resizing.flixster.com/cjkVrRNy9SYE3PwJ1AYbqSg0sq4=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzliMTVjNTkwLTA1ZTUtNDEyMS04NmNmLTBiMzA2OThhMGY0MC5qcGc="},
        {id:2,title:"SICILY! (SICILIA! (1999))", url:"https://resizing.flixster.com/YKNVfixJhb76A3l1VB-4AsRuYBY=/206x305/v2/https://resizing.flixster.com/54Cg2Dgpo4h7jxgdQGpRt2VpXLQ=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2Q3MzY5ZWQzLTBkZmMtNGU1ZC1hNDI4LWVmNWJjMzZlODBmZC5qcGc="},
        {id:3,title:"benjamen", url:"https://resizing.flixster.com/wfkCoD4FeCFQr9KmcB11aNH4JDs=/206x305/v2/https://flxt.tmsimg.com/assets/p16588174_p_v10_aa.jpg"}
      ],
      filterMovie:""

     }
  }
  findMovies=(x)=>{
  this.setState({
    filterMovie:x})
  
  }
  addmovie=(x)=>{
    this.setState({
      MovieList:[...this.state.MovieList,{id:Math.floor(Math.random()*1000),title:x.title,url:x.url}]
    })
  }
  render() { 
    return ( 
      <div>
        <Header findMovies={this.findMovies} Movies={this.state.MovieList}/>
        <Main filterMovie={this.state.filterMovie}  addmovie={this.addmovie} Movies={this.state.MovieList}/>
        <Footer/>
      </div>
     );
  }
}
 
export default App;