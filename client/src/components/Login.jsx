import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
    }

    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }

    render() {
        return (
            <div className = "login-box">
                <form>
                    <input type = "email" name = "email" value = {this.state.email} placeholder = "Your Email" onChange = {this.handleInputChange}/>
                    <input type = "password" name = "password" value = {this.state.password} placeholder = "Password" onChange = {this.handleInputChange}/>
                    <button type = "submit">Log in</button>
                </form>
                <div className = "register-link">
                    <p>New user of our community? Welcome!</p>
                    <Link to = '/register'>Register Here.</Link>
                </div>
            </div>
        )
    }
}

export default Login;