import React from "react";

const Nav = () => (
    // THIS WILL NEED TO BE TEASED OUT INTO THE CORRECT SET UP...
    //NavbaR
<nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>                        
        </button>
        <a class="navbar-brand" href="#">[Subject]Youtube</a>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="/signin">Sign In</a></li>
          <li><a href="#">[Subjects]</a></li>
          <li><a href="/signup">Sign Up</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;