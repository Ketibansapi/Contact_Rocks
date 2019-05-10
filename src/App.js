import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import './App.css';

class App extends Component  {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Rocks" />
        <Contact name="Ketibansapi" email="ketibs@gmail.com" phone="555-555-555" />
        <Contact name="Chicken" email="chickenflakes@gmail.com" phone="555-555-555" />
      </div>
    );
  }
}

export default App;
