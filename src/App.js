import React, { Component } from 'react';
import Slideshow from './components/Slideshow.jsx';
import logo from './assets/images/logo.png';
import './assets/styles/App.css';

class App extends Component {

  render() {
    return(
    <div className="App">
      <header className="App-header">
        <img src= {logo} className="App-logo" alt="logo" />
      </header>
      <Slideshow />
    </div>
    );
  }
}

export default App;
