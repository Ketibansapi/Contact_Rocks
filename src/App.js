import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component  {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Rocks" />
        <div className="container">
          <Contact name="Ketibansapi" email="ketibs@gmail.com" phone="555-555-555" />
          <Contact name="Chicken" email="chickenflakes@gmail.com" phone="555-555-555" />
        </div>
      </div>
    );
  }
}

export default App;
