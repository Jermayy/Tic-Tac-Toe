// @flow
import * as React from 'react';
import Square from './components/Square';
import logo from './logo.svg';
import './App.css';
import Main from './Main';

const App = (): React.Node => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. yeet
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Square/>
      </header>

      
    </div>
  );
}

export default Main;
