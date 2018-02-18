import React from 'react';

import SearchBox from './SearchBox';
import Login from './Login';
import Register from "./Register";

const Home = (props) => {
    return (
         <div className = 'home-content'>
            {props.loginShow ? <Login handleLoginSubmit = {props.handleLoginSubmit} registerShowHandler = {props.registerShowHandler}/> : ""}
            {props.registerShow ? <Register handleRegisterSubmit = {props.handleRegisterSubmit} loginShowHandler = {props.loginShowHandler}/> : ""}
            <SearchBox/>
        </div>
    )
}

export default Home;