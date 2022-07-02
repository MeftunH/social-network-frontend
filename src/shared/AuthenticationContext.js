import React, { Component } from 'react'

export const Authentication = React.createContext();

 class AuthenticationContext extends Component {
    state = {
        isLoggedIn: false,
        username: "user1",
      };
    
      onLoginSuccess = (username) => {
        this.setState({ isLoggedIn: true, username });
      };
    
      onLogoutSuccess = () => {
        this.setState({ isLoggedIn: false, username: undefined });
      };
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
export default AuthenticationContext;