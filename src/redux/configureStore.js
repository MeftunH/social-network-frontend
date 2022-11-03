import { createStore } from "redux";
import authReducer from './authReducer';
import SecureLS from "secure-ls";
import thunk from 'redux-thunk';

const ls = new SecureLS({ encodingType: "aes" });

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  

const getStateFromLocalStorage = () => {
  const socialAppAuth = ls.get("SOCIAL_APP_AUTH");

  let stateInLocalStorage = {
    isLoggedIn: false,
    username: undefined,
    displayName: undefined,
    image: undefined,
    password: undefined,
  };

  if (socialAppAuth) {    
    return socialAppAuth;
}
return stateInLocalStorage;
};
const updateStateInLocalStorage = newState => {
  ls.set("SOCIAL_APP_AUTH", newState);
}

const configureStore = () => {

  const store =  createStore(authReducer,getStateFromLocalStorage(),devtools);  
  //calls on all state changes
  store.subscribe(() => {
    updateStateInLocalStorage(store.getState());
  });
  return store;
};

export default configureStore;