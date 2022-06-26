import UserSignupPage from "../pages/UserSignupPage";
import LoginPage from "../pages/LoginPage";
import LanguageSelector from "../components/LanguageSelector";
import ApiProgress from "../shared/ApiProgress";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import {HashRouter as Router,Redirect,Route,Switch} from 'react-router-dom'
import TopBar from "../components/TopBar";
function App() {
  return (
    <div>
      <Router>
      <TopBar></TopBar>
      <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/signup" exact component={UserSignupPage} />
      <Route path="/user/:username" exact component={UserPage} />
      <Redirect to="/" />
      </Switch>
      </Router>
      <LanguageSelector />
    </div>
  );
}

export default App;
