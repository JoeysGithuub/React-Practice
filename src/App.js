import React, { Component } from '../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and s ave to reload.
        </p>
      </div>
    );
  }
}

export default App;
