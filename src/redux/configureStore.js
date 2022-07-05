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
 
  const store =  createStore(authReducer, loggedInState,devtools);  
  //calls on all state changes
  store.subscribe(() => {
   localStorage.setItem('SOCIAL_APP_AUTH',JSON.stringify(store.getState()));
  });
  return store;
}

export default configureStore;