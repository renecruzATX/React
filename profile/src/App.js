import React, { Component } from 'react';
import './App.css';
import {  Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./components/home.js";
import Education from "./components/education.js";
import Social from "./components/social.js";
import MyAvatar from './components/avatar.js';




class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div className='wrapper'>
            <div className="av">
              <MyAvatar/>
            </div>
              <h1>Hi, I'm Rene Cruz, Full Stack Javascript Developer and Seeker of Truth</h1>
              <ul className="header">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/education.js">Education</NavLink></li>
                <li><NavLink to="/social.js">Social</NavLink></li>
              </ul>
              <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/education.js" component={Education}/>
                <Route path="/social.js" component={Social}/>
              </div>
            </div>
          </HashRouter>


        </div>
    );
  }
}

export default App;
