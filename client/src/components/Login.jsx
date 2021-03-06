import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
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
                <form onSubmit = {(e) => this.props.handleLoginSubmit(e, this.state.username, this.state.password)}>
                    <input type = "text" name = "username" value = {this.state.username} placeholder = "Username" onChange = {this.handleInputChange}/>
                    <input type = "password" name = "password" value = {this.state.password} placeholder = "Password" onChange = {this.handleInputChange}/>
                    <button type = "submit">Log in</button>
                </form>
                <div className = "login-link">
                    <p>New user of our community? Welcome!</p>
                    <button onClick = {() => this.props.logOrRegHandler(false, true)}>Register Here</button>
                    <button onClick = {() => this.props.logOrRegHandler(false, false)}>Continue as Guest</button>
                </div>
            </div>
        )
    }
}

export default Login;