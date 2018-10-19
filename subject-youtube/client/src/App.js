import React, { Component } from 'react';

import TestPage from "./components/pages/testPage";
import Nav from './components/NavBar/Nav.js';
import Footer from "./components/footer/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
      
      <div className="App">
      <Nav />
        <header className="App-header">

          
          <TestPage />
          

        </header>
        <Footer />
      </div>
    );
  }
}

export default App;