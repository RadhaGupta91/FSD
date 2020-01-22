import React, { Component } from 'react';

import Persons from './containers/Persons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ol>
          <li>Turned this app to use Redux state intead of local state (in components)</li>
        </ol>
        <Persons />
      </div>
    );
  }
}

export default App;
