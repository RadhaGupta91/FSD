import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './aboutus';
import Contact from './contact';
import { Route, Link, BrowserRouter as Router, NavLink } from 'react-router-dom' 

const routing = (
        <Router>
            <div>
                <h1 className="text">React Router Example</h1>
                <ul>
                    <li><NavLink to="/" exact activeStyle={{color:'Green',fontWeight:'bold',textDecoration:'none'}}>Home</NavLink></li>
                    <li><NavLink to="/about" exact activeStyle={{color:'Green',fontWeight:'bold',textDecoration:'none'}}>About</NavLink></li>
                    <li><NavLink to="/contact" exact activeStyle={{color:'Green',fontWeight:'bold',textDecoration:'none'}}>Contact</NavLink></li>
                </ul>

                {/* Define route of application */}
                <Route exact path="/" component={App} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </div>
        </Router>
    ) 
ReactDOM.render(routing, document.getElementById("root"));

