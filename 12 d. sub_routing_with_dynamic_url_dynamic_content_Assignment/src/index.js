import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Home from './screen/Home';
import About from './screen/About';
import FavThings from './screen/FavoriteThings';
import Header from './screen/header/Header';
import Footer from './screen/header/Footer';

class App extends React.Component
{
    render()
    {
        return(
            <Router>
                <div className="App">
                    <Header></Header>

                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/favthings">FavThings</Link></li>
                    </ul>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/favthings" component={FavThings}></Route>
                    <Footer></Footer>
                </div>
            </Router>
            
        )
    }
}
ReactDOM.render(<App />,document.getElementById("root"));