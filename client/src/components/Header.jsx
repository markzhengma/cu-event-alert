import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        var userMenuHide = {
            height: "0",
            width: "100px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            position: "fixed",
            top: "15vh",
            right: "0",
            backgroundColor: "#C4D8E2",
            textDecoration: "none",
            color: "white",
            transition: "height 0.3s",
        };
        var userMenuShow = {
            height: "120px",
            width: "100px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            position: "fixed",
            top: "15vh",
            right: "0",
            backgroundColor: "#C4D8E2",
            textDecoration: "none",
            color: "white",
            transition: "height 0.3s",
        };
        var linkShow = {
            textDecoration: "none",
            color: "white",
            cursor: "pointer",
            visibility: "visible",
            opacity: "1",
            transitionDelay: "0.5s",
            transitionProperty: "opacity",
            transition: "0.7s",
            height: "30px",
            padding: "5px 0 0 5px",
        };
        var linkHide = {
            textDecoration: "none",
            color: "white",
            cursor: "pointer",
            visibility: "hidden",
            opacity: "0",
            transitionProperty: "background_color",
            height: "30px",
            padding: "5px 0 0 5px",
            transition: "background-color 0.3s",
        }
        return (
            <header>
                <div>
                    <div className = 'app-header'>
                        <div className = "header-text">
                            <Link to = "/">
                                <h1>CU EVENT</h1>
                            </Link>
                        </div>
                        <div className = "navigator">
                            <div className = "nav-link">
                                <Link to = '/all'>Browse Event</Link>
                            </div>
                            <div className = "nav-link">
                                <Link to = '/new'>Create Event</Link>
                            </div>
                            {this.props.auth ? 
                                <div className = "userlink-group">
                                    <div className = "nav-link">
                                        <a onClick = {this.props.userMenuHandler}>{this.props.user.username}<i className="fas fa-user"></i></a>
                                    </div>
                                </div>
                            :
                                <div className = "nav-link">
                                    <a onClick = {() => this.props.logOrRegHandler(true, false)}>Log in</a>
                                </div>
                            }

                        </div>
                    </div>
                    <div className = "user-menu" style = {this.props.userMenuShow ? userMenuShow : userMenuHide}>
                        <Link to = "/user" style = {this.props.userMenuShow ? linkShow : linkHide}>Profile</Link>
                        <a style = {this.props.userMenuShow ? linkShow : linkHide}>My Events</a>
                        <a style = {this.props.userMenuShow ? linkShow : linkHide}>Settings</a>
                        <a onClick = {this.props.logOut} style = {this.props.userMenuShow ? linkShow : linkHide}>Log out</a>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;