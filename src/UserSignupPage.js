import React from 'react';

class UserSignupPage extends React.Component{
    render(){
        return (
            <form>
                <h1>Sign Up</h1>
                    <div>
                    <h1><label>Username</label> </h1>
                    <input></input>
                    </div>
                    <div>
                    <h1><label>Display Name</label></h1>
                    <input></input>
                    </div>
                    <div>
                    <h1><label>Password</label></h1>
                    <input type="password"></input>
                    </div>
                    <div>
                    <h1><label>Password Repeat</label></h1>
                    <input type="password"></input>
                    </div>
                    <button>Sign Up</button>
            </form>
        );
    }
}
export default UserSignupPage;