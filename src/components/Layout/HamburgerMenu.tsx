import React, { useState } from 'react';
import { scaleRotate as Menu } from 'react-burger-menu';
import { recordEvent } from '../../utils';
import type { Themes } from '../../ts/types';
interface IProps {
  theme: Themes;
}

const links = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Projects',
    href: '#testimonials',
  },
  {
    label: 'Testimonials',
    href: '#footer',
  },
];

const createStyles = (theme: 'light' | 'dark') => ({
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
});

const HamburgerMenu: React.FC<IProps> = ({ children, theme }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const styles = createStyles(theme);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setMenuOpen(false);
    recordEvent({
      category: 'Hamburger Menu Link',
      action: 'Click',
      label: `${e.currentTarget.id}`,
    });
  };

  return (
    <div id='App'>
      <Menu
        id='side-bar'
        pageWrapId={'page-wrap'}
        outerContainerId={'App'}
        isOpen={isMenuOpen}
        onStateChange={(prevState: { isOpen: boolean }) => {
          if (prevState.isOpen) {
            recordEvent({
              category: 'Hamburger Menu',
              action: 'state change',
              label: `Hamburger menu state changed to: ${prevState.isOpen ? 'open' : 'closed'}`,
            });
          }
          setMenuOpen(prevState.isOpen);
        }}
        styles={styles}
      >
        {links.map((link) => {
          return (
            <a href={link.href} className='menu-item' id={link.label} onClick={handleLinkClick} key={link.label}>
              {link.label}
            </a>
          );
        })}
      </Menu>
      <div id='page-wrap'>{children}</div>
    </div>
  );
};

export default HamburgerMenu;
