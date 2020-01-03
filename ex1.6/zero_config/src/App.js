import React, { Component } from 'react';
import './App.css';
class App extends Component {
render() {
  const hw1 = `Welcome to the Road to learn React.`;
  let hw2 = `Default`;
  hw2 = `Updated.`;
  class User {
    constructor(first, last){
      this.first = first;
      this.last = last;
    }
    name() {
      return `${this.first} ${this.last}`;
    }
    greet() {
      return (
        <p>Hello! My name is <b>{this.name()}</b>!</p>
      );
    }
  }
  var j = new User("John", "Smith");
  return (
    <div className="App">
      <h2>{hw1} {hw2}</h2>
      <p>{j.greet()}</p>
    </div>
  );
}
}
export default App;

