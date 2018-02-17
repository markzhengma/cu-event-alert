import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
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
            <div className = "register-box">
                <form>
                    <input type = "email" name = "email" value = {this.state.email} placeholder = "Your Email" onChange = {this.handleInputChange}/>
                    <input type = "password" name = "password" value = {this.state.password} placeholder = "Password" onChange = {this.handleInputChange}/>
                    <input type = 'text' name = 'first-name' value = {this.state.firstName} placeholder = "Your First Name" onChange = {this.handleInputChange}/>
                    <input type = 'text' name = 'last-name' value = {this.state.lastName} placeholder = "Your Last Name" onChange = {this.handleInputChange}/>
                    <button type = "submit">Register</button>
                </form>
                <Link to = "/login">Return</Link>
            </div>
        )
    }
}

export default Register;