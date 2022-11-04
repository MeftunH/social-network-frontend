import React, { Component } from "react";
import Input from "../components/Input";
import { withTranslation } from "react-i18next";
import { login } from "../api/apiCalls";
import axios from "axios";
import ButtonWithProgress from "../components/ButtonWithProgress";
import { withApiProgress } from "./../shared/ApiProgress";
// import { Authentication } from './../shared/AuthenticationContext';
import { connect } from "react-redux";
import { loginSuccess } from "../redux/authActions";
import { loginHandler } from './../redux/authActions';
class LoginPage extends Component {
  // static contextType=Authentication;

  state = {
    username: null,
    password: null,
    error: null,
    pendingApiCall: false,
  };

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, error: null });
  };

  componentDidMount() {
    axios.interceptors.request.use((request) => {
      this.setState({ pendingApiCall: true });
      return request;
    });
    axios.interceptors.response.use(
      (response) => {
        this.setState({ pendingApiCall: false });
        return response;
      },
      (error) => {
        this.setState({ pendingApiCall: false });
        throw error;
      }
    );
  }

  onClickLogin = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const creds = {
      username,
      password,
    };

    const { history, dispatch } = this.props;
    const { push } = this.props.history;

    this.setState({ error: null });
    try {
     await dispatch(loginHandler(creds));
      push("/");
    
    } catch (apiError) {
      //from axios
      // this.setState({
      //   error: apiError.response.data.message,
      // });
    }
  };

  render() {
    const { t, pendingApiCall } = this.props;
    const { username, password, error } = this.state;
    const buttonEnabled = username && password;
    return (
      <div className="container">
        <form>
          <h1 className="text-center">{t("Login")}</h1>
          <Input
            label={t("Username")}
            name="username"
            onChange={this.onChange}
          ></Input>
          <Input
            label={t("Password")}
            name="password"
            type="password"
            onChange={this.onChange}
          ></Input>
          {this.state.error && (
            <div className="alert alert-danger"> {error}</div>
          )}
          <div className="text-center">
            <ButtonWithProgress
              onClick={this.onClickLogin}
              disabled={!buttonEnabled || pendingApiCall}
              pendingApiCall={pendingApiCall}
              text={t("Login")}
            ></ButtonWithProgress>
          </div>
        </form>
      </div>
    );
  }
}

const LoginPageWithTranslation = withTranslation()(LoginPage);


export default connect(withApiProgress(LoginPageWithTranslation, "/api/1.0/auth"));
