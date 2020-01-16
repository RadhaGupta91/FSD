import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import About from './screen/aboutus';
import Home from './screen/home';
import Topic from './screen/topic';

let currentPath = window.location.pathname;

const MainComponent = (props)=>{

    switch(props.path)
    {
        case '/about':
            return <About/>
        case '/topic':
            return <Topic/>
        default:
            return <Home/>
    }
}

ReactDOM.render(<MainComponent path={currentPath}/>, document.getElementById("root"));

