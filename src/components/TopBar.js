import React, { Component } from "react";
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import {withTranslation} from "react-i18next";
class TopBar extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="shadow-sm  bg-light mb-2">
        <nav className="navbar navbar-light bg-light container navbar-expand">
          <Link className="navbar-brand" to="/">
           <img src={logo} width="60" alt="SocialApp Logo"/>
            SocialApp
          </Link>
       
         <ul className="navbar-nav ml-auto">
         <li>
         <Link className="nav-link" to='/login'>
         {t('Login')}
         </Link>
         </li>
         <li>
         <Link className="nav-link" to='/signup'>
         {t('Sign up')}
         </Link>
         </li>
         </ul>

        </nav>
      </div>
    );
  }
}

export default withTranslation()(TopBar);
