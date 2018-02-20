import React from 'react';

import SearchBox from './SearchBox';
import Login from './Login';
import Register from "./Register";

const Home = (props) => {
    return (
         <div className = 'home-content'>
            {props.loginShow ? <Login handleLoginSubmit = {props.handleLoginSubmit} logOrRegHandler = {props.logOrRegHandler}/> : ""}
            {props.registerShow ? <Register handleRegisterSubmit = {props.handleRegisterSubmit} logOrRegHandler = {props.logOrRegHandler}/> : ""}
            <SearchBox/>
        </div>
    )
}

export default Home;