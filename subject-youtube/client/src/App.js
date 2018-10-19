import React, { Component } from 'react';

import TestPage from "./components/pages/testPage";
import Nav from './components/NavBar/Nav.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <TestPage />

        </header>
      </div>
    );
  }
}

export default App;