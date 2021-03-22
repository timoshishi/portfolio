import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/GlobalStyles';
import { lightTheme, darkTheme } from './styles/themes';
import useDarkMode from './hooks/useDarkMode';
import Home from './views/Home';

const App = () => {
  const [isDarkTheme, themeToggler] = useDarkMode();
  const themeMode = !isDarkTheme ? darkTheme : lightTheme;

  return (
    <React.Fragment>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <button onClick={themeToggler}>Toggle theme</button>
        <Home />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
