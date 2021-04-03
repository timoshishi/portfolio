import React, { useState } from 'react';
import { scaleRotate as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
const HamburgerMenu = ({ children, isDarkTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const styles = {
    bmBurgerBars: {
      background: !isDarkTheme ? '#6B8096' : '#373a47',
      borderRadius: '2px',
    },
  };
  return (
    <div id='App'>
      <Menu
        id='side-bar'
        pageWrapId={'page-wrap'}
        outerContainerId={'App'}
        isOpen={menuOpen}
        onStateChange={(state) => {
          setMenuOpen(state.menuOpen);
        }}
        styles={styles}>
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
        <Link
          className='menu-item'
          to='/contact'
          onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </Menu>
      <div id='page-wrap'>{children}</div>
    </div>
  );
};

export default HamburgerMenu;
