import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: '',
            school: '',
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
                <form onSubmit = {(e) => this.props.handleRegisterSubmit(e, this.state.username, this.state.password, this.state.firstname, this.state.lastname, this.state.email, this.state.school)}>
                    <input type = "username" name = "username" value = {this.state.username} placeholder = "Your username" onChange = {this.handleInputChange}/>
                    <input type = "password" name = "password" value = {this.state.password} placeholder = "Password" onChange = {this.handleInputChange}/>
                    <input type = 'text' name = 'firstname' value = {this.state.firstname} placeholder = "Your First Name" onChange = {this.handleInputChange}/>
                    <input type = 'text' name = 'lastname' value = {this.state.lastname} placeholder = "Your Last Name" onChange = {this.handleInputChange}/>
                    <input type = "text" name = "email" value = {this.state.email} placeholder = "Your Email" onChange = {this.handleInputChange}/>
                    <input type = "text" name = "school" value = {this.state.school} placeholder = "Your School" onChange = {this.handleInputChange}/>
                    <button type = "submit">Register</button>
                </form>
                <a onClick = {this.props.loginShowHandler}>Return</a>
            </div>
        )
    }
}

export default Register;