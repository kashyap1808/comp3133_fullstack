import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom"
import Home from './Home'
import About from './About'
import Error from './Error'
import Contact from './Contact'
import Student from './Student'
import Redirect from './Redirect'

const Navigation = () => {
    return (
        <BrowserRouter>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/student/Jim Smith'>Student: Jim Smith</Link></li>
                <li><Link to='/student/Jane Smith/50001'>Student: Jane Smith, Student No: 50001</Link></li>
                <li><Link to='/redirect'>Redirect</Link></li>
            </ul>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact}></Route>
                <Route path='/student/:studentname/:studentno?' component={Student}></Route>
                <Route path='/redirect' component={Redirect}></Route>
                <Route component={Error}></Route>
            </Switch>
        </BrowserRouter>
    )
}

  export default Navigation;