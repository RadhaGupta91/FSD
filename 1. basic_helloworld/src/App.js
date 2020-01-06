import React, {Component} from 'react';
import './App.css';
import Person from './person/person';

class App extends Component
{
  state = {
    person:[
      {name : "Radhika", age : 28},
      {name : "Dinesh", age : 28},
      {name : "muku", age : 22},
    ],
    city:"ludhiana"
  }
  switchNameHandler = (name) => {
      this.setState({
        person:[
          {name : "Radhika", age : 28},
          {name : "Dinesh", age : 28},
          {name : name, age : 22},
        ]
      })
  }
  nameChangedHandlerEvent = (event) => {
      this.setState({
        person:[
          {name : "Radhika", age : 28},
          {name : "Dinesh", age : 28},
          {name : event.target.value, age : 22},
        ]
      })
  }
  
  nameChangeHandler = (event) => {
      this.setState({
        person:[
          {name : "Radhika", age : 28},
          {name : "Dinesh", age : 28},
          {name : event, age : 22},
        ]
      })
  }
  
  render()
  {

    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      color:'white'
    };

    return(
      <div className = "App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        
        {/* Ways to update  */}
        <p>

        <button style = {style} onClick={()=>this.switchNameHandler("MUKUL")}>click here to change name</button>
        </p>
        <button style = {style} onClick={this.nameChangeHandler.bind(this,'Mr.Mukul') } >click here to change name using bind</button>

        <Person name= {this.state.person[0].name} age= {this.state.person[0].age} >My Hobbies</Person>
        <Person name= {this.state.person[1].name} age= {this.state.person[1].age}
        changed = {this.nameChangedHandlerEvent}
        >Hobbies</Person>

        <Person name= {this.state.person[2].name} age= {this.state.person[2].age} 
        click= {this.switchNameHandler.bind(this,'React')}
        changed = {this.nameChangedHandlerEvent}>My Hobbies</Person>
      </div>
    )
  }
}

export default App;