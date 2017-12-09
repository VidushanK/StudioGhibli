import React, { Component } from 'react';

class Slideshow extends Component {
  constructor(){
    super()
    this.state ={
      movies: [],
      loading: false,
      fetched: false,
    };
  }

  componentWillMount(){
    this.setState({
      loading: true
    });
    fetch('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49')
    .then(response => response.json())
    .then((data) =>{
      console.log(data)
    });
  }

  render(){
    return(
      <h1> Hello World </h1>
    )
  }
}

export default Slideshow;
