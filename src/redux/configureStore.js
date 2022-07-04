import { createStore } from "redux";
import authReducer from './authReducer';

const loggedInState = {
    isLoggedIn: true,
    username: "user1",
    displayName: "user1_dn",
    image: null,
    password: "P4ssword*",
  };
  
const configureStore = () => {
 return createStore(authReducer, loggedInState);  
}

export default configureStore;