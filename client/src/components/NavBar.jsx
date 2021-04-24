import React, { Component } from "react";
import { Button, Navbar } from 'react-bootstrap'
import '../style/style.css';
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
    <div className = "navbarMain">
      <div>
        <h1>Studio 3B: Facemask Detection Application
        </h1>
      </div>
    </div>
    );
  }
}

export default NavBar;
