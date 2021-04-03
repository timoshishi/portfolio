import React, { useState } from 'react';
import { scaleRotate as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
const HamburgerMenu = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id='App'>
      <Menu
        id='side-bar'
        pageWrapId={'page-wrap'}
        outerContainerId={'App'}
        isOpen={menuOpen}
        onStateChange={(state) => {
          setMenuOpen(state.menuOpen);
        }}>
        <Link to='/' className='menu-item' onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link
          to='/projects'
          className='menu-item'
          onClick={() => setMenuOpen(false)}>
          Projects
        </Link>
        <Link
          to='/about'
          className='menu-item'
          onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <a
          className='menu-item'
          href='#contact'
          onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </Menu>
      <div id='page-wrap'>{children}</div>
    </div>
  );
};

export default HamburgerMenu;
