import UserSignupPage from "../pages/UserSignupPage";
import LoginPage from "../pages/LoginPage";
import LanguageSelector from "../components/LanguageSelector";
import ApiProgress from "../shared/ApiProgress";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import { connect } from "react-redux/es/exports";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import TopBar from "../components/TopBar";
import { Component } from "react";

class App extends Component {
  // static contextType=Authentication;
  render() {
    const isLoggedIn = false;
    return (
      <div>
        <Router>
          <TopBar/>
          <Switch>
            <Route path="/" exact component={HomePage} />
            {!isLoggedIn && (
              <Route
                path="/login"
                exact
                component={LoginPage} 
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

const mapStateToProps = (store) => {
  return {
      isLoggedIn: store.isLoggedIn
  };
}

export default connect(mapStateToProps)(App);
