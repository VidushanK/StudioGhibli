import React, { Component } from 'react';
import Slideshow from './components/Slideshow.jsx';
import './assets/styles/App.css';

class App extends Component {

  render() {
    return(
    <div className="App">
    <Slideshow />
    </div>
    );
  }
}

export default App;
