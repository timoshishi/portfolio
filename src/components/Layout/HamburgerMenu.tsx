import React, { useState } from 'react';
import { scaleRotate as Menu, State } from 'react-burger-menu';

interface IProps {
  theme: string;
}

interface MenuState extends State {
  menuOpen: boolean;
}

const HamburgerMenu: React.FC<IProps> = ({ children, theme }) => {
  const styles = {
    bmBurgerBars: {
      background: theme === 'light' ? '#373a47' : '#6B8096',
      borderRadius: '2px',
    },
    bmMenu: {
      background: theme === 'light' ? '#697EFF' : '#373a47',
    },
    bmItem: {
      color: theme === 'light' ? '#FFF' : '#FAFAFA',
    },
    bmCross: {
      background: theme === 'light' ? '#FAFAFA' : '#888',
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
        onStateChange={(prevState: MenuState) => {
          setMenuOpen(prevState.menuOpen);
        }}
        styles={styles}>
        <a
          href='#home'
          className='menu-item'
          onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a
          href='#about'
          className='menu-item'
          onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a
          href='#contact'
          className='menu-item'
          onClick={() => setMenuOpen(false)}>
          Projects
        </a>
      </Menu>
      <div id='page-wrap'>{children}</div>
    </div>
  );
};

export default HamburgerMenu;
