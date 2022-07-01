import UserSignupPage from "../pages/UserSignupPage";
import LoginPage from "../pages/LoginPage";
import LanguageSelector from "../components/LanguageSelector";
import ApiProgress from "../shared/ApiProgress";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import TopBar from "../components/TopBar";
import { Component } from "react";
class App extends Component {
  state = {
    isLoggedIn: false,
    username: "user1",
  };

  onLoginSuccess = (username) => {
    this.setState({ isLoggedIn: true, username });
  };

  onLogoutSuccess = () => {
    this.setState({ isLoggedIn: false, username: undefined });
  };

  render() {
    const { isLoggedIn, username } = this.state;
    return (
      <div>
        <Router>
          <TopBar
            username={username}
            isLoggedIn={isLoggedIn}
            onLogoutSuccess={this.onLogoutSuccess}
          ></TopBar>
          <Switch>
            <Route path="/" exact component={HomePage} />
            {!isLoggedIn && (
              <Route
                path="/login"
                exact
                component={(routerProps) => {
                  return (
                    <LoginPage
                      {...routerProps}
                      onLoginSuccess={this.onLoginSuccess}
                    />
                  );
                }}
              />
            )}
            <Route path="/signup" exact component={UserSignupPage} />
            <Route path="/user/:username" exact component={UserPage} />
            <Redirect to="/" />
          </Switch>
        </Router>
        <LanguageSelector />
      </div>
    );
  }
}

export default App;
