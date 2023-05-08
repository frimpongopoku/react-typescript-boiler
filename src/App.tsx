import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [number, setNumber] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
         We counting {number}
        </p>
        <button onClick={() =>setNumber(number+1) }>Count</button>
      </header>
    </div>
  );
}

export default App;
