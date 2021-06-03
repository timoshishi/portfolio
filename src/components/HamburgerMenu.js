import React, { useState } from 'react';
import { scaleRotate as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const HamburgerMenu = ({ children, isDarkTheme }) => {
  const styles = {
    bmBurgerBars: {
      background: !isDarkTheme ? '#6B8096' : '#373a47',
      borderRadius: '2px',
    },
    bmMenu: {
      background: isDarkTheme ? '#697EFF' : '#373a47',
    },
    bmItem: {
      color: isDarkTheme ? '#FFF' : '#FAFAFA',
    },
    bmCross: {
      background: isDarkTheme ? '#FAFAFA' : '#888',
    },
  };
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
        }}
        styles={styles}>
        <Link to='/' className='menu-item' onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <a
          href='#projects'
          className='menu-item'
          onClick={() => setMenuOpen(false)}>
          Projects
        </a>
        <a
          href='#about'
          className='menu-item'
          onClick={() => setMenuOpen(false)}>
          About
        </a>
      </Menu>
      <div id='page-wrap'>{children}</div>
    </div>
  );
};

export default HamburgerMenu;
