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
          <input type="text">Name</input>
          <input type="email">email</input>
          <input type="password">password</input>
          <input class="button" type="submit"></input>
        </form>
      </div>
    )
  }
}
export default CoolButton;

/*
<form action="/action_page.php">
  First name: <input type="text" name="fname"><br>
  Last name: <input type="text" name="lname"><br>
  <input type="submit" value="Submit">
</form>
*/