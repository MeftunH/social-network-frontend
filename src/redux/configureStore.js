import { createStore } from "redux";
import authReducer from './authReducer';

const loggedInState = {
    isLoggedIn: true,
    username: "user1",
    displayName: "user1_dn",
    image: null,
    password: "P4ssword*",
  };

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  
const configureStore = () => {
 return createStore(authReducer, loggedInState,devtools);  
}

export default configureStore;