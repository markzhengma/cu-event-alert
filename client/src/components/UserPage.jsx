import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserPage extends Component {
    constructor() {
        super();
        this.state = {
            something: null,
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
            <div className = "userpage">
                <div className = "user-title">
                    <h3>{this.props.user.firstname} {this.props.user.lastname}</h3>
                </div>
                <div className = "user-detail">
                    <p>Username: {this.props.user.username}</p>
                    <p>Email: {this.props.user.email}</p>
                    <p>School: {this.props.user.school}</p>
                </div>
            </div>
        )
    }
}

export default UserPage;