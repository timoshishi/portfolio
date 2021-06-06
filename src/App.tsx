import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';
import useDarkMode from './hooks/useDarkMode';
import GlobalStyles from './styles/GlobalStyles';
import HamburgerMenu from './components/HamburgerMenu';
import ThemeToggleButton from './components/ThemeToggleButton';
import Home from './components/Home';

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;
  return (
    <React.Fragment>
      {themeMode !== null && (
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          {themeMode && (
            <>
              {' '}
              <ThemeToggleButton toggleTheme={themeToggler} theme={theme} />
              <HamburgerMenu theme={theme}>
                <Home />
              </HamburgerMenu>{' '}
            </>
          )}
        </ThemeProvider>
      )}
    </React.Fragment>
  );
};

export default App;
