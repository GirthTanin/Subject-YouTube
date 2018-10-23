import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Collapse from "./components/Collapse";
import DropdownItem from "./components/DropdownItem";
import DropdownMenu from "./components/DropdownMenu";
import DropdownToggle from "./components/DropdownToggle";
// import Nav from "./components/Nav";
import Navbar from "./components/Navbar";
import NavbarBrand from "./components/NavbarBrand";
import NavbarNav from "./components/NavbarNav";
import NavbarToggler from "./components/NavbarToggler";
import NavItem from "./components/NavItem";
import NavLink from "./components/NavLink";

let Dropdown = require("./components/Dropdown").default;
let DropdownMenuComponent = require("./components/DropdownMenuComponent")
  .default;





// This is me, but I'm not sure if it will be helpful
// import "./Nav2.css";

class NavbarFeatures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            // <Router>


const Nav2 = () => (
                <Navbar color="indigo" dark expand="md" scrolling>
                    <NavbarBrand href="/">
                        <strong>Navbar</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavItem active>
                              <NavLink to="#">Home</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">Features</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">Pricing</NavLink>
                          </NavItem>
                          <NavItem>
                            <Dropdown>
                                <DropdownToggle nav caret>Dropdown</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href="#">Action</DropdownItem>
                                    <DropdownItem href="#">Another Action</DropdownItem>
                                    <DropdownItem href="#">Something else here</DropdownItem>
                                    <DropdownItem href="#">Something else here</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                          </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                          <NavItem>
                            <form className="form-inline md-form mt-0">
                              <input className="form-control mr-sm-2 mb-0 text-white" type="text" placeholder="Search" aria-label="Search"/>
                            </form>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
)


export default Nav2;