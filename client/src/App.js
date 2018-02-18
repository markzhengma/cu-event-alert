import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

class App extends Component {
  constructor(){
    super();
    this.state = {
      auth: false,
      user: null,
      currentContent: "home",
      redirect: "/",
      loginShow: false,
      registerShow: false,
    }
    this.requireLogin = this.requireLogin.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.logOut = this.logOut.bind(this);
    this.setContent = this.setContent.bind(this);
    this.loginShowHandler = this.loginShowHandler.bind(this);
    this.registerShowHandler = this.registerShowHandler.bind(this);
  }

  requireLogin(){
    if(!this.state.auth){
      this.setState({
        loginShow: true,
      });
    }else{
      this.setState({
        redirect: "/user",
      })
    }
  };

  handleLoginSubmit(e, username, password) {
    e.preventDefault();
    axios.post('/auth/login', {
      username,
      password,
    })
    .then(res => {
      this.setState({
        auth: res.data.auth,
        user: res.data.user,
      });
    })
    .then(() => {
      if(this.state.user){
        this.setState({
          loginShow: false,
        })
      }
    })
    .catch(err => {
      console.log(err);
    })
  };

  handleRegisterSubmit(e, username, password, firstname, lastname, email, school){
    e.preventDefault();
    axios.post("/auth/register", {
      username,
      password,
      firstname,
      lastname,
      email,
      school
    })
    .then(res => {
      console.log(res);
      this.setState({
        auth: res.data.auth,
        user: res.data.user,
      });
    })
    .then(
      this.setState({
        registerShow: false,
      })
    )
    .catch(err => {
      console.log(err);
    })
  };

  logOut = () => {
    axios.get("/auth/logout")
    .then(res => {
      console.log(res);
      this.setState({
        currentContent: "home",
        auth: false,
        user: null,
        redirect: "/",
      });
    })
    .catch(err => {
      console.log(err);
    })
  };

  setContent = (content) => {
    this.setState({
      currentContent: content,
    })
  };

  loginShowHandler = () => {
    if(this.state.auth == false){
      this.setState({
        loginShow: true,
        registerShow: false,
      })
    }
  };

  registerShowHandler = () => {
    if(this.state.auth == false){
      this.setState({
        loginShow: false,
        registerShow: true,
      })
    }
  }

  render() {
    // if(this.state.redirect !== null){
    //   let redir = this.state.redirect;
    //   this.setState({
    //     redirect: null,
    //   });
    //   return (
    //     <Router>
    //       <Redirect push to = {redir} />
    //     </Router>
    //   )
    // }else{
      return (
        <Router>
          <div className="App">
            <Header user = {this.state.user} auth = {this.state.auth} logOut = {this.logOut} loginShowHandler = {this.loginShowHandler}/>
            <main>
              <Route exact path = '/' render = {() => <Home handleLoginSubmit = {this.handleLoginSubmit} 
                                                            handleRegisterSubmit = {this.handleRegisterSubmit} 
                                                            loginShow = {this.state.loginShow} 
                                                            registerShow = {this.state.registerShow} 
                                                            loginShowHandler = {this.loginShowHandler} 
                                                            registerShowHandler = {this.registerShowHandler}
                                                            />}/>
                                                            
            </main>
            <Footer/>
          </div>
        </Router>
      );
    // }
  }
}

export default App;
