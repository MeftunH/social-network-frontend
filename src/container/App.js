import UserSignupPage from "../pages/UserSignupPage";
import LoginPage from "../pages/LoginPage";
import LanguageSelector from "../components/LanguageSelector";
import ApiProgress from "../shared/ApiProgress";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import {HashRouter,Redirect,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <div>
      <HashRouter>
      <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/signup" exact component={UserSignupPage} />
      <Route path="/user/:username" exact component={UserPage} />
      <Redirect to="/" />
      </Switch>
      </HashRouter>
      <LanguageSelector />
    </div>
  );
}

export default App;
