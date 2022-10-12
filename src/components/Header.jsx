import React, { Component } from 'react';
// import NavbarBurger from './NavBurger';

class Header extends Component {

  render() {
    return(
      <nav className='navbar'>
        <div className='brand-title'>COFFEE</div>
        <a href="#/" className='toggle-button' >
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </a>
        {/* <NavbarBurger /> */}
        <div className='navbar-links'>
          <ul>
            <li><a href="#Main">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Menu">Menu</a></li>
            <li><a href="#Location">Location</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;