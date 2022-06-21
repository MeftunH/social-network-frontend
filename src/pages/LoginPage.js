import React, { Component } from 'react'
import Input from '../components/Input'

export default class Login extends Component {
    state = {
        username: null,
        password: null,
    }

    onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='container'>
                <form>
                    <h1 className='text-center'>Login</h1>
                    <Input label="Username" name="username" onChange={this.onChange}></Input>
                    <Input label="Password" name="password" onChange={this.onChange}></Input>
                    <div className='text-center'>
                    <button className='btn btn-primary'>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}
