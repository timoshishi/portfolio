import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';
import useDarkMode from './hooks/useDarkMode';
import GlobalStyles from './components/GlobalStyles';
import HamburgerMenu from './components/HamburgerMenu';
import ThemeToggleButton from './components/ThemeToggleButton';
import Home from './components/Home';

const App = () => {
  const [isDarkTheme, toggleTheme] = useDarkMode();
  const themeMode = !isDarkTheme ? darkTheme : lightTheme;

  return (
    <React.Fragment>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Router>
          {themeMode && (
            <>
              {' '}
              <ThemeToggleButton
                toggleTheme={toggleTheme}
                isDarkTheme={isDarkTheme}
              />
              <HamburgerMenu isDarkTheme={isDarkTheme}>
                <Home />
              </HamburgerMenu>{' '}
            </>
          )}
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
