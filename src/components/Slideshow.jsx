import React, { Component } from 'react';

class Slideshow extends Component {
  constructor(){
    super()
    this.state ={
      flim: [],
      title: [],
      content: [],
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
      // data.forEach(flim =>{
      //   console.log(flim.title)
      //   this.setState({
      //     title: flim.title,
      //     content: flim.description
      //   });
      // });
    });
  }

  render(){
    const flim = this.state.flim
    const listFlims = flim.map ((d) => <p>{d.title} {d.description}</p>)
    return (
      <div>
      {listFlims}
      </div>
    )
  }
}

export default Slideshow;
