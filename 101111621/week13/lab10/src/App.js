import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom"
import Navigation from './components/Navigation';
import history from './components/History'
import customHistory from './components/History';


class App extends Component {
  render() {
    return (
      <BrowserRouter history={customHistory}>
        <Navigation/>
      </BrowserRouter>
    );
  }
}

export default App;
