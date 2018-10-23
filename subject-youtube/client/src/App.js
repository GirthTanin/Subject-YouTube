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
import TestPage from "./componentsMine/pages/testPage";
import Nav from './componentsMine/NavBar/Nav.js';
// import Nav2 from './componentsMine/Nav2/Nav2';
// import Footer from "./componentsMine/footer/Footer";
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