import React, { Component } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { logoutSuccess } from './../redux/authActions';
class TopBar extends Component {
  render() {
    const { t,isLoggedIn,username,onLogoutSuccess } = this.props;
          let links = (
            <ul className="navbar-nav ml-auto">
              <li>
                <Link className="nav-link" to="/login">
                  {t("Login")}
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/signup">
                  {t("Sign up")}
                </Link>
              </li>
            </ul>
          );

          if (isLoggedIn) {
            links = (
              <ul className="navbar-nav ml-auto">
                <li>
                  <li>
                    <Link className="nav-link" to={`/user/${username}`}>
                      {username}
                    </Link>
                  </li>
                  <li
                    className="nav-link"
                    onClick={onLogoutSuccess}
                    style={{ cursor: "pointer" }}
                  >
                    {t("Logout")}
                  </li>
                </li>
              </ul>
            );
          }
          return (
            <div className="shadow-sm  bg-light mb-2">
              <nav className="navbar navbar-light bg-light container navbar-expand">
                <Link className="navbar-brand" to="/">
                  <img src={logo} width="60" alt="SocialApp Logo" />
                  SocialApp
                </Link>

                {links}
              </nav>
            </div>
          );
        };
}
const TopBarWithTranslation = withTranslation()(TopBar);

const mapStateToProps = (store) => {
  return {
      isLoggedIn: store.isLoggedIn,
      username: store.username,
  };
}

const mapDispatchToProps = (dispatch) => {
 return {
  onLogoutSuccess: () => {
    return dispatch(logoutSuccess());
  }
 }
}

export default connect(mapStateToProps,mapDispatchToProps)(TopBarWithTranslation);
