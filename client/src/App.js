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
    }
    this.requireLogin = this.requireLogin.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.logOut = this.logOut.bind(this);
    this.setContent = this.setContent.bind(this);
  }

  requireLogin(){
    if(!this.state.auth){
      this.setState({
        redirect: "/login",
      });
    }else{
      this.setState({
        redirect: "/user",
      })
    }
  };

  handleLoginSubmit(e, email, password) {
    e.preventDefault();
    axios.post('/auth/login', {
      email,
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
          redirect: '/user',
        })
      }
    })
    .catch(err => {
      console.log(err);
    })
  };

  handleRegisterSubmit(e, email, password, firstName, lastName){
    e.preventDefault();
    axios.post("/auth/register", {
      email,
      password,
      firstName,
      lastName
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
        redirect: "/user",
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
            <Header user = {this.state.user} auth = {this.state.auth} />
            <main>
              <Route exact path = '/' render = {() => <Home />}/>
              <Route exact path = '/login' render = {() => <Login handleLoginSubmit = {this.handleLoginSubmit}/>} />
              <Route exact path = '/register' render = {() => <Register handleRegisterSubmit = {this.handleRegisterSubmit}/>} />
            </main>
            <Footer/>
          </div>
        </Router>
      );
    // }
  }
}

export default App;
