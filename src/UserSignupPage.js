import React from 'react';
import axios from 'axios';
class UserSignupPage extends React.Component{

    state = {
        username: null,
        displayName: null,
        password: null,
        passwordRepeat: null
    }

    onChange = event => {
//select event target name and value of target
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    onClickSignUp = event => {
    //stop form event browser default behavior
    event.preventDefault();
    
    const {username,displayName,password} = this.state;

    //key:value pairs
    const body = {
        username,
        displayName,
        password,
    }

    axios.post('http://localhost:8081/api/1.0/users', body)
    }

    render(){
        return (
            <form>
                <h1>Sign Up</h1>
                    <div>
                    <h1><label>Username</label> </h1>
                    <input name="username" onChange={this.onChange}></input>
                    </div>
                    <div>
                    <h1><label>Display Name</label></h1>
                    <input name="displayName" onChange={this.onChange}></input>
                    </div>
                    <div>
                    <h1><label>Password</label></h1>
                    <input name="password" onChange={this.onChange} type="password"></input>
                    </div>
                    <div>
                    <h1><label>Password Repeat</label></h1>
                    <input name="passwordRepeat" onChange={this.onChange} type="password"></input>
                    </div>
                    <button onClick={this.onClickSignUp}>Sign Up</button>
            </form>
        );
    }
}
export default UserSignupPage;