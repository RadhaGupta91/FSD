import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './person/person';

/* function App() {
  const name = "Radha";
  return (
        <div className='App'>
          <h1>My name is Radhika</h1>
          <h1>My name is  {name}</h1>
          <Person name = "Radhika" age = "28" children = "Hasrat"></Person>
          <Person name = "Dinesh" age = "28">My Hobbies: Racing</Person>
        </div>
       );
}
 */
class App extends Component
{
  state = {
    person: [
        {name: "Radhika",age :28 },
        {name: "aman",age :21 },
      ]
  }
  
  render(){
    return (
      <div className = 'App'>
          <h1>Hello Form App.js</h1>
          <h1>Age: {this.state.person[0].age}</h1>
          <Person age = {this.state.person[0].age} name = {this.state.person[0].name}></Person>
      </div>
    )
  }
}
 export default App;
