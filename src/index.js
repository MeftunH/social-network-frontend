import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./bootstrap-override.scss";
import reportWebVitals from "./reportWebVitals";
import "./i18n";
import App from "./container/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
// import AuthenticationContext from "./shared/AuthenticationContext";

const loggedInState = {
  isLoggedIn: true,
  username: "user1",
  displayName: "user1_dn",
  image: null,
  password: "P4ssword*",
};

const defaultState = {
  isLoggedIn: false,
  username: undefined,
  displayName: undefined,
  image: undefined,
  password: undefined,
};

//give last state and action to reducer
const reducer = (state, action) => {
  if (action.type === "LOGOUT_SUCCESS") {
    return defaultState;
  }
  return state;
};
const store = createStore(reducer, loggedInState);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
