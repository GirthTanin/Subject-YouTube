import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  Footer,
  NavLink
} from "./components";

// import Bootstrap from 'bootstrap';
import TestPage from "./components/pages/testPage";
import Nav from './components/NavBar/Nav.js';
// import Nav2 from './components/Nav2/Nav2';
// import Footer from "./components/footer/Footer";
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