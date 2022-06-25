import React, { Component } from "react";
import logo from '../assets/logo.png';

class TopBar extends Component {
  render() {
    return (
      <div className="shadow-sm  bg-light mb-2">
        <nav className="navbar navbar-light bg-light container">
          <a className="navbar-brand" href="#/">
           <img src={logo} width="60" alt="SocialApp Logo"/>
            SocialApp
          </a>
        </nav>
      </div>
    );
  }
}

export default TopBar;
