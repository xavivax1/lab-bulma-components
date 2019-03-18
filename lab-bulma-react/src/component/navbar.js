import 'bulma/css/bulma.css';
import React, { Component } from 'react';
// import classNames from 'classnames';
import CoolButton from './CoolButton';


class NavBar extends Component {
  render(){
    return (
      <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
    </a>

  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <CoolButton isPrimary info='Signup'/>
          <CoolButton isInfo info='Login'/>
        </div>
      </div>
    </div>
  </div>
</nav>
    )
  }
}
export default NavBar;

/*

<CoolButton isInfo info='Login'/>
            <CoolButton isPrimary info='Signup'/>
*/