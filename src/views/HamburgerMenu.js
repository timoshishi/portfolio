import React from 'react';
import { scaleRotate as Menu } from 'react-burger-menu';

const HamburgerMenu = ({ children }) => {
  return (
    <div id='App'>
      <Menu id='side-bar' pageWrapId={'page-wrap'} outerContainerId={'App'}>
        <a className='menu-item' href='/'>
          Home
        </a>
        <a className='menu-item' href='/burgers'>
          Projects
        </a>
        <a className='menu-item' href='/pizzas'>
          About
        </a>
        <a className='menu-item' href='/desserts'>
          Contact
        </a>
      </Menu>
      <div id='page-wrap'>{children}</div>
    </div>
  );
};

export default HamburgerMenu;
