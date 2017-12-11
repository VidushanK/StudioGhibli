import React, { Component } from 'react';
import Slider from 'react-slick';
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
        flim: data,
        fetched: true
      })
    });
  }

  render(){
    const fetched = this.state.fetched
    const flim = this.state.flim
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    if (fetched == false) {
      return(
        <div>
          <h1>Error with API, please try again!</h1>
        </div>
      )
    } else {
      const listFlims = flim.map((d) => <div className="card"><h1>{d.title}</h1> <p>{d.description}</p></div>)
      return (
        <div>
        <Slider {...settings}>
        {listFlims}
        </Slider>
        </div>
      )
    }
  }
}

export default Slideshow;
