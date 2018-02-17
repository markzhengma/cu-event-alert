import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
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
                    {props.auth ? 
                        <div className = "nav-link">
                            <Link to = "/user">{props.user.firstName}</Link>
                            <Link to = "/">Logout</Link>
                        </div>
                    :
                        <div className = "nav-link">
                            <Link to = '/login'>Log In</Link>
                        </div>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;