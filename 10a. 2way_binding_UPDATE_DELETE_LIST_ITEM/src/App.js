import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Person from './person/Person';

class App extends Component{

    state = {
        persons: [
            {id :"121", name:"STEPHINE!", age:21},
            {id :"122", name:"JACK", age:22},
            {id :"123", name:"JOEL", age:33},
        ],
        otherState : true,
        showPerson:true
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({
            showPerson:!doesShow
        })
    }
    deletePersonHandler = (index)=>{
        let persons = [...this.state.persons]; //use spread operator
        let person = persons.splice(index,1);
        this.setState({
            persons:persons
        });

    }

    nameChangeHandler = ( event, id ) => {
        const personIndex = this.state.persons.findIndex((p)=>{
            return p.id == id;
        })
        // 1st- create person object using spread operator
        /* const person = {
            ...this.state.persons[personIndex]
        }; */
        console.log(personIndex);
        // 2nd- create new object using Object
        const person = Object.assign({},this.state.persons[personIndex]);
        console.log(person);

        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState( {persons: persons} );
    }
    
    //1st way using IF statement
    render(){

        const style = {
            backgroundColor: '#ccc',
            font: 'inherit',
            border: '1px solid #c2c2c2',
            padding: '8px',
            cursor: 'pointer'
        };

        let person = null;
        if(this.state.showPerson)
        {
            person = (
            <div>
                {this.state.persons.map((person,index)=>{
                    return <Person click={()=>this.deletePersonHandler(index) } 
                    key={index} 
                    name={person.name}  
                    age={person.age}
                    changed = {(event)=>this.nameChangeHandler(event,person.id)}></Person>
                })
                }
            </div>)
        }
        
        return(
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button style={style} onClick={()=>this.togglePersonHandler()}>TOGGLE PERSON INFO</button>
                <div>
                    {person}
                </div>
            </div>
            )
        } 
}

export default App;