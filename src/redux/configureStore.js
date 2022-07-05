import { createStore } from "redux";
import authReducer from './authReducer';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  
const configureStore = () => {

  const socialAppAuth = localStorage.getItem("SOCIAL_APP_AUTH");

  let stateInLocalStorage = {
    isLoggedIn: false,
    username: undefined,
    displayName: undefined,
    image: undefined,
    password: undefined,
  };

  if (socialAppAuth) {
    
    try {
    stateInLocalStorage = JSON.parse(socialAppAuth);
    } catch (error) {
      console.log(error);
    }

  }


  const store =  createStore(authReducer,stateInLocalStorage,devtools);  
  //calls on all state changes
  store.subscribe(() => {
   localStorage.setItem('SOCIAL_APP_AUTH',JSON.stringify(store.getState()));
  });
  return store;
}

export default configureStore;