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
                    <p>Necessary information for logging in.</p>
                    <input className = "register-input" type = "username" name = "username" value = {this.state.username} placeholder = "Your username" onChange = {this.handleInputChange}/>
                    <input className = "register-input" type = "password" name = "password" value = {this.state.password} placeholder = "Password" onChange = {this.handleInputChange}/>
                    <p>More about you...</p>
                    <input className = "register-input" type = 'text' name = 'firstname' value = {this.state.firstname} placeholder = "Your First Name" onChange = {this.handleInputChange}/>
                    <input className = "register-input" type = 'text' name = 'lastname' value = {this.state.lastname} placeholder = "Your Last Name" onChange = {this.handleInputChange}/>
                    <input className = "register-input" type = "text" name = "email" value = {this.state.email} placeholder = "Your Email" onChange = {this.handleInputChange}/>
                    <input className = "register-input" type = "text" name = "school" value = {this.state.school} placeholder = "Your School" onChange = {this.handleInputChange}/>
                    <div className = "btn-group">
                        <button className = "register-btn" type = "submit">Register</button>
                        <button className = "register-btn" onClick = {() => this.props.logOrRegHandler(false, false)}>Back</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register;