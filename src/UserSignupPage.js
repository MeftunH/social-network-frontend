import React from 'react';
import axios from 'axios';
class UserSignupPage extends React.Component{

    state = {
        username: null,
        displayName: null,
        password: null,
        passwordRepeat: null,
        pendingApiCall: false,
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
    };
    this.setState({pendingApiCall: true});

    axios.post('/api/1.0/users', body)
    .then((response) => {
        this.setState({pendingApiCall: false});
    }).catch(error => {
        this.setState({pendingApiCall: false});
    });
    }

    render(){
        return (
          <div className="container">
              <form>
                <h1 className='text-center'>Sign Up</h1>
                    <div className='form-group'>
                    <h1><label>Username</label> </h1>
                    <input className='form-control' name="username" onChange={this.onChange}></input>
                    </div>
                    <div className='form-group'>
                    <h1><label>Display Name</label></h1>
                    <input className='form-control'  name="displayName" onChange={this.onChange}></input>
                    </div>
                    <div className='form-group'>
                    <h1><label>Password</label></h1>
                    <input className='form-control'  name="password" onChange={this.onChange} type="password"></input>
                    </div>
                    <div className='form-group'>
                    <h1><label>Password Repeat</label></h1>
                    <input className='form-control'  name="passwordRepeat" onChange={this.onChange} type="password"></input>
                    </div>
                    <div className='text-center'>
                    <button className='btn btn-primary' onClick={this.onClickSignUp} disabled={this.state.pendingApiCall}>
                    {this.state.pendingApiCall && <span className="spinner-border spinner-border-sm"></span>}
                    Sign Up</button>
                    </div>
            </form>
          </div>
        );
    }
}
export default UserSignupPage;