import React from 'react';
import { scaleRotate as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
const HamburgerMenu = ({ children }) => {
  return (
    <div id='App'>
      <Menu id='side-bar' pageWrapId={'page-wrap'} outerContainerId={'App'}>
        <Link to='/' className='menu-item'>
          Home
        </Link>
        <Link to='/projects' className='menu-item'>
          Projects
        </Link>
        <Link to='/about' className='menu-item'>
          About
        </Link>
        <a className='menu-item' href='#contact'>
          Contact
        </a>
      </Menu>
      <div id='page-wrap'>{children}</div>
    </div>
  );
};

export default HamburgerMenu;
