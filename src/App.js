import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Question} from './Question';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Name that Animal</h1>
        </header>
        
        <div className="container">
          <h2 className="App-intro my-5">
            Choose the correct animal below:
          </h2>
          <Question />
        </div>
      </div>
    );
  }
}

export default App;
