import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';
import useDarkMode from './hooks/useDarkMode';
import GlobalStyles from './styles/GlobalStyles';
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
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
