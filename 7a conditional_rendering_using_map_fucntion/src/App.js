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
    listItem = [
        {name:"Ravi",age:21,position:"Junior - Developer"},
        {name:"Aman",age:21,position:"Senior - Developer"},
        {name:"Radhika",age:21,position:"Senior - Developer"},
    ];
    //1st way using IF statement
  /*   render(){
        let person = null;
        if(this.state.showPerson)
        {
            person = (<div>
                <Person item = {this.listItem}></Person>
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
        } */
        
        //1st way using Ternary operator
    render(){
        return(
            <div>
                <button onClick={()=>this.togglePersonHandler()}>Toggle</button>
                { (this.state.showPerson)?
                <div>
                    <Person item = {this.listItem}></Person>
                </div>:null
                }
                
            </div>
            )
    } 
}

export default App;