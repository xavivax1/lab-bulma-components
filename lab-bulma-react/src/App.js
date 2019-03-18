import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import CoolButton from './component/CoolButton';
import NavBar from './component/navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <CoolButton isDanger isSmall isRounded info='Button 1'/>
        <CoolButton isSmall isSuccess info='Button 2'/>
      </div>
    );
  }
}
//<CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
export default App;
