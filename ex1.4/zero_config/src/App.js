import React from 'react';
//import logo from './xln.svg';
import './App.css';

function App() {
  let col1 = `#FF88CC`;
  let col2 = `#AAFFAA`;
  return (
    <div className="App">
      <header className="App-header">
      <svg className="App-logo" xmlns="http://www.w3.org/2000/svg" version="1.1" id="svg3727" width="300" height="300" viewBox="0 0 3000 3000" >
        <path fill={col1} d="M 1550,2300.0027 1649.9992,2101 l 149.9999,299 h 600.0013 l -450.0008,-900 450.0008,-900.00002 h -600 L 1349.9988,1500.0015 1450.0003,1699.9967 1350.0012,1899 1150.0002,1499.999 1700.0004,399.99998 h 1000 L 2149.9996,1500 2700.0004,2600 h -999.9991 z" id="path3737" />
        <path fill={col2} d="M 850.0003,1500 299.99958,400.00002 H 1299.9987 L 1450,699.99736 1350.0008,899 1200.0009,600.00002 H 599.99948 L 1050.0004,1500 599.99948,2400 h 600.00012 l 450.0016,-900.0015 -100.0015,-199.9952 99.9991,-199.0034 200.001,399.0011 L 1299.9996,2600 H 299.99958 Z" id="path3737-9" />
      </svg>

        <p>
          This is the result of basic editing of <code className="App-code">src/App.js</code> and saving to reload.
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
