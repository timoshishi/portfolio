import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/GlobalStyles';
import { lightTheme, darkTheme } from './styles/themes';
import useDarkMode from './hooks/useDarkMode';
import Home from './views/Home';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  position: relative;
  height: 100vh;
  width: 100vh;
`;
const App = () => {
  const [isDarkTheme, themeToggler] = useDarkMode();
  const themeMode = !isDarkTheme ? darkTheme : lightTheme;

  return (
    <React.Fragment>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Wrapper>
          <button onClick={themeToggler}>Toggle theme</button>
          <Home isDarkTheme={isDarkTheme} />
        </Wrapper>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
