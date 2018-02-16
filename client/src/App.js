import React, { Component } from 'react';
import logo from './logo.svg';
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

class App extends Component {
  constructor(){
    super();
    this.state = {
      auth: false,
      user: null,
      currentContent: "home",
      redirect: "/"
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header user = {this.state.user} auth = {this.state.auth} />
          <main>
            <Route exact path = '/' render = {() => <Home />}/>
            <Route exact path = 'login' render = {() => <Login />} />
          </main>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
