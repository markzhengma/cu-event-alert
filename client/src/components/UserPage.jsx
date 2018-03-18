import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserPage extends Component {
    componentDidMount(){
        this.props.clearSelectedUser();
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
            this.props.selectedUser ? 

            this.props.user ?

            this.props.selectedUser.id === this.props.user.id ?

            <div className = "user-page">
                <div className = "user-title">
                    <h3>{this.props.user.firstname} {this.props.user.lastname}</h3>
                </div>
                <div className = "user-detail">
                    <p>Username: {this.props.user.username}</p>
                    <p>Email: {this.props.user.email}</p>
                    <p>School: {this.props.user.school}</p>
                </div>
                <div className = "eventlist-btn">
                    <p>My Events</p>
                    <p>Events I Liked</p>
                </div>
            </div>
            :
            <div className = "user-page">
                <div className = "user-title">
                    <h3>{this.props.selectedUser.firstname} {this.props.selectedUser.lastname}</h3>
                </div>
                <div className = "user-detail">
                    <p>Username: {this.props.selectedUser.username}</p>
                    <p>Email: {this.props.selectedUser.email}</p>
                    <p>School: {this.props.selectedUser.school}</p>
                </div>
                <div className = "eventlist-btn">
                    <p>Events</p>
                    <p>Liked</p>
                </div>
            </div>
            : 
            <div className = "user-page">
                <div className = "user-title">
                    <h3>{this.props.selectedUser.firstname} {this.props.selectedUser.lastname}</h3>
                </div>
                <div className = "user-detail">
                    <p>Username: {this.props.selectedUser.username}</p>
                    <p>Email: {this.props.selectedUser.email}</p>
                    <p>School: {this.props.selectedUser.school}</p>
                </div>
                <div className = "eventlist-btn">
                    <p>Events</p>
                    <p>Liked</p>
                </div>
            </div>
            :
            this.props.user ?
            
            <div className = "user-page">
                <div className = "user-title">
                    <h3>{this.props.user.firstname} {this.props.user.lastname}</h3>
                </div>
                <div className = "user-detail">
                    <p>Username: {this.props.user.username}</p>
                    <p>Email: {this.props.user.email}</p>
                    <p>School: {this.props.user.school}</p>
                </div>
                <div className = "eventlist-btn">
                    <p>My Events</p>
                    <p>Events I Liked</p>
                </div>
            </div>
            :
            <div className = "user-page">
                <h3>Loading...</h3>
            </div>
        )
    }
}

export default UserPage;