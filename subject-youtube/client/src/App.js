import React, { Component } from 'react';

// import Bootstrap from 'bootstrap';
import TestPage from "./components/pages/testPage";
import Nav from './components/NavBar/Nav.js';
import Footer from "./components/footer/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Nav />
 
      <div className="App">
        <header className="App-header">

          
          <TestPage />
          

        </header>
        <Footer />
      </div>
      </div>
    );
  }
}

export default App;