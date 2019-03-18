import 'bulma/css/bulma.css';
import React, { Component } from 'react';
import CoolButton from 'CoolButton';
import NavBar from './navbar';

class SignUp extends Component {
  render(){
    return (
      <div>
        <NavBar></NavBar>
        <form>
          <input></input>
          <input></input>
          <input></input>
          <input class="button" type="submit" value="Submit input"></input>
          <CoolButton></CoolButton>
        </form>
      </div>
    )
  }
}
export default CoolButton;
