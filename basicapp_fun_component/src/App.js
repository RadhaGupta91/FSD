import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './person/person';

function App() {
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

export default App;
