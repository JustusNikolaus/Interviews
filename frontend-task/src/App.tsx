import React from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * The task at hand is to build a simple dynamic dashboard that lists "Assets." 
 * These assets have different statuses like "Available," "Allocated," and "Under Maintenance." 
 * Your challenge is to display these assets and provide a filtering mechanism to show assets based on their statuses.
 * 
 */


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
