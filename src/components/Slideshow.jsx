import React, { Component } from 'react';
import '../assets/styles/slideshow.css';

class Slideshow extends Component {
  constructor(){
    super()
    this.state ={
      flim: [],
      loading: false,
      fetched: false,
    };
  }

  componentWillMount(){
    this.setState({
      loading: true
    });
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => response.json())
    .then((data) => {
      this.setState({
        flim: data
      })
    });
  }

  render(){
    const flim = this.state.flim
    const listFlims = flim.map((d) => <div className="card"><h1>{d.title}</h1> <p>{d.description}</p></div>)
    return (
      <div>
      {listFlims}
      </div>
    )
  }
}

export default Slideshow;
