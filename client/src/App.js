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
import UserPage from "./components/UserPage";
import UserEvent from "./components/UserEvent";
import UserSetting from "./components/UserSetting";
import BrowseEvent from "./components/BrowseEvent";
import SingleEvent from './components/SingleEvent';
import NewEvent from "./components/NewEvent";

class App extends Component {
  constructor(){
    super();
    this.state = {
      auth: false,
      user: null,
      selectedUser: null,
      currentContent: "home",
      redirect: null,
      loginShow: false,
      registerShow: false,
      userMenuShow: false,
      eventData: null,
      selectedEvent: null,
      highlightEvent: null,
    }
    this.requireLogin = this.requireLogin.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.logOut = this.logOut.bind(this);
    this.setContent = this.setContent.bind(this);
    this.logOrRegHandler = this.logOrRegHandler.bind(this);
    this.userMenuHandler = this.userMenuHandler.bind(this);
    this.selectEventHandler = this.selectEventHandler.bind(this);
    this.handleNewEventSubmit = this.handleNewEventSubmit.bind(this);
    this.updatedEventDataHandler = this.updatedEventDataHandler.bind(this);
    this.clearRedirect = this.clearRedirect.bind(this);
    this.selectUserHandler = this.selectUserHandler.bind(this);
    this.clearSelectedUser = this.clearSelectedUser.bind(this);
  }


  componentDidMount(){
    axios.get("/event/all")
    .then(res => {
        console.log(res.data)
        this.setState({
            eventData: res.data,
        })
    })
    .catch(err => {
        console.log(err);
    });
};

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
        redirect: null,
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

  logOrRegHandler = (hasLogin, hasRegister) => {
    this.setState({
      loginShow: hasLogin,
      registerShow: hasRegister,
    })
  };

  userMenuHandler = () => {
    this.setState({
      userMenuShow: !this.state.userMenuShow,
    })
  };

  selectEventHandler = (index) => {
    this.setState({
      selectedEvent: this.state.eventData[index]
    })
  };

  handleNewEventSubmit(e, event_name, event_type, event_time, event_fee, event_location, event_location_detail, event_desc){
    e.preventDefault();
    axios.post("/event/new", {
      event_name: e.target.event_name.value,
      event_type: e.target.event_type.value,
      event_time: e.target.event_time.value,
      event_fee: e.target.event_fee.value,
      event_location: e.target.event_location.value,
      event_location_detail: e.target.event_location_detail.value,
      event_desc: e.target.event_desc.value,
    })
    .then(res => {
        console.log(res.data)
        this.setState({
          selectedEvent: res.data,
        })
      }
    )
    .then(res => {
      this.setState({
        redirect: '/event/single'
      })
    })
    .catch(err => {
      console.log(err);
    });
  };

  updatedEventDataHandler = () => {
    axios.get("/event/all")
    .then(res => {
        console.log(res.data)
        this.setState({
            eventData: res.data,
        })
    })
    .catch(err => {
        console.log(err);
    });
  };

  clearRedirect = () => {
    console.log("clearing redirect url...");
    this.setState({
      redirect: null,
    });
  };

  selectUserHandler (username){
    console.log(username);
    axios.get(`/user/${username}`, {
      username: username,
    })
    .then(res => {
      this.setState({
        selectedUser: res.data,
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  clearSelectedUser = () => {
    this.setState({
      selectedUser: null,
    })
  }

  render() {
    if(this.state.redirect){
      return (
        <Router>
          <Redirect push to = {this.state.redirect} />
        </Router>
      )
    }else{
      return (
        <Router>
          <div className="App">
            <div className = "spacer-block"/>
            <Header user = {this.state.user} 
                    auth = {this.state.auth} 
                    userMenuShow = {this.state.userMenuShow}
                    loginShow = {this.state.loginShow} 
                    registerShow = {this.state.registerShow} 
                    logOut = {this.logOut} 
                    logOrRegHandler = {this.logOrRegHandler}
                    userMenuHandler = {this.userMenuHandler}
                    handleLoginSubmit = {this.handleLoginSubmit} 
                    handleRegisterSubmit = {this.handleRegisterSubmit}
                    selectedUser = {this.state.selectedUser}
                    selectUserHandler = {this.selectUserHandler}
                    />
            <main>
              <Route exact path = '/' render = {() => <Home auth = {this.state.auth} 
                                                            user = {this.state.user}
                                                            eventData = {this.state.eventData}
                                                            selectEventHandler = {this.selectEventHandler}
                                                            />}/>
              <Route exact path = "/user" render = {() => <UserPage user = {this.state.user}
                                                                    selectedUser = {this.state.selectedUser}
                                                                    clearSelectedUser = {this.clearSelectedUser}
                                                                    />}/>
              <Route exact path = "/user/event" render = {() => <UserEvent user = {this.state.user}/>}/>
              <Route exact path = "/user/setting" render = {() => <UserSetting user = {this.state.user}/>}/>
              <Route exact path = "/event/all" render = {() => <BrowseEvent eventData = {this.state.eventData}
                                                                            selectEventHandler = {this.selectEventHandler}
                                                                            updatedEventDataHandler = {this.updatedEventDataHandler}
                                                                            selectedUser = {this.state.selectedUser}
                                                                            selectUserHandler = {this.selectUserHandler}
                                                                />}/>
              <Route path = "/event/single" render = {() => <SingleEvent selectedEvent = {this.state.selectedEvent}
                                                                         clearRedirect = {this.clearRedirect}
                                                                         user = {this.state.user}
                                                                />}/>
              <Route path = "/event/new" render = {() => <NewEvent user = {this.state.user}
                                                                   auth = {this.state.auth}
                                                                   eventData = {this.state.eventData}
                                                                   clearRedirect = {this.clearRedirect}
                                                                   handleNewEventSubmit = {this.handleNewEventSubmit}
                                                                   updatedEventDataHandler = {this.updatedEventDataHandler}
                                                                   />}/>
              <Footer/>
            </main>
          </div>
        </Router>
      );
    }
  }
}

export default App;
