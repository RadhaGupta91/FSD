import React,{Component} from 'react';
import './App.css';

function App(){
    return(
        <div className = "App"><h1>Hello World!!! from Function Component</h1></div>
    )
} 

// Enable below to print Hello world from Class component
/* 
class App extends Component{

    render(){
        return(
            <div className = "App">
                <h1>Hello World!!! from Class Component</h1>
            </div>
        )
    }
}
*/
export default App;