import React, { Component } from 'react';
import './App.css';
class App extends Component {


render() {
 // var helloWorld = `Welcome to the Road to learn React.`;
 let c = {
   c1: '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6),
   c2: '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6)
 };

  return (
    //var col3 = this.state.buttonStatus;
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 3000 3000">
        <path id="path1" d="M1550 2300 1650 2101l150 299h600l-450-900 450-900h-600L1350 1500 1450 1700 1350 1899 1150 1500 1700 400h1000L2150 1500 2700 2600h-1000z" fill={c.c2}/>
        <path id="path2" d="M850 1500 300 400H1300L1450 700 1350 899 1200 600H600L1050 1500 600 2400h600l450-900-100-200 100-199 200 399L1300 2600H300Z" fill={c.c1}/>
      </svg>
      <button >Click to change to yellow</button>
    </div>
    
  );
}
}
export default App;

