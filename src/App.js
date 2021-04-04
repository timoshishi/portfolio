import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/GlobalStyles';
import { lightTheme, darkTheme } from './styles/themes';
import useDarkMode from './hooks/useDarkMode';
import ThemeToggleButton from './components/ThemeToggleButton';
import { BrowserRouter as Router } from 'react-router-dom';
import HamburgerMenu from './views/HamburgerMenu';
import Routes from './Routes';

const App = () => {
  const [isDarkTheme, toggleTheme] = useDarkMode();
  const themeMode = !isDarkTheme ? darkTheme : lightTheme;

  return (
    <React.Fragment>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Router>
          <ThemeToggleButton
            toggleTheme={toggleTheme}
            isDarkTheme={isDarkTheme}
          />
          <HamburgerMenu isDarkTheme={isDarkTheme}>
            <Routes />
          </HamburgerMenu>
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
