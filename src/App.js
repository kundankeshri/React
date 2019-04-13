import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 //import Functional from './Components/Functional'
//import MyComponent from './Components/Functional'
 import {Functional} from './Components/Functional'
 import UseJSX from './Components/UseJSX'
 import Welcome from './Components/Welcome'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Functional></Functional>
        <Welcome/>
        <UseJSX/>
      </div>
    );
  }
}

export default App;
