import UserSignupPage from "../pages/UserSignupPage";
import LoginPage from "../pages/LoginPage";
import LanguageSelector from "../components/LanguageSelector";
import ApiProgress from "../shared/ApiProgress";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
function App() {
  return (
    <div className="row">
      <UserPage></UserPage>
      <LanguageSelector />
    </div>
  );
}

export default App;
