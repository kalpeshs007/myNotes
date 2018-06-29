import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
        <nav>
        <div className="nav-wrapper grey darken-3">
          <a href="#!" className="brand-logo">MyNotes</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <a className="waves-effect waves-light btn amber lighten-2"><i className="material-icons left">person</i>Login</a>
            <a className="waves-effect waves-light btn amber lighten-2"><i className="material-icons left">cloud</i>Register</a>
          </ul>
        </div>
        </nav>
    )
  }
}

export default NavBar;