import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Person from './person/Person';

class App extends Component{

    state = {
        showPerson:true
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({
            showPerson:!doesShow
        })
    }

    //1st way using IF statement
    render(){
        let person = null;
        if(this.state.showPerson)
        {
            person = (<div>
                <Person name = "Aman" age = {21} position="Senior - Developer"></Person>
                <Person name = "Ravi" age = {22} position="Junior - Developer"></Person>
            </div>)
        }
        
        return(
            <div>
                <button onClick={()=>this.togglePersonHandler()}>TOGGLE PERSON INFO</button>
                <div>
                    {person}
                </div>
            </div>
            )
        }
        
        //1st way using Ternary operator
/*     render(){
        return(
            <div>
                <button onClick={()=>this.togglePersonHandler()}>Toggle</button>
                { (this.state.showPerson)?
                <div>
                    <Person name = "Aman" age = {21} position="Senior - Developer"></Person>
                    <Person name = "Ravi" age = {22} position="Junior - Developer"></Person>
                </div>:null
                }
                
            </div>
            )
    } */
}

export default App;