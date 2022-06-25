import React, { Component } from "react";
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

class TopBar extends Component {
  render() {
    return (
      <div className="shadow-sm  bg-light mb-2">
        <nav className="navbar navbar-light bg-light container">
          <Link className="navbar-brand" to="/">
           <img src={logo} width="60" alt="SocialApp Logo"/>
            SocialApp
          </Link>
        </nav>
      </div>
    );
  }
}

export default TopBar;
