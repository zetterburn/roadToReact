import React, { Component } from 'react';
import './App.css';
class App extends Component {
render() {
  var helloWorld = `Welcome to the Road to learn React.`;
  
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
      <h2>{helloWorld}</h2>
      <p>{j.greet()}</p>
    </div>
  );
}
}
export default App;

