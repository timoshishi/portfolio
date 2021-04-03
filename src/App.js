import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/GlobalStyles';
import { lightTheme, darkTheme } from './styles/themes';
import useDarkMode from './hooks/useDarkMode';
import Home from './views/Home';
import ThemeToggle from './components/ThemeToggle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './views/Projects';
import HamburgerMenu from './views/HamburgerMenu';
import About from './views/About';
import Contact from './views/Contact';

const App = () => {
  const [isDarkTheme, toggleTheme] = useDarkMode();
  const themeMode = !isDarkTheme ? darkTheme : lightTheme;

  return (
    <React.Fragment>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <ThemeToggle toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <Router>
          <HamburgerMenu isDarkTheme={isDarkTheme}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/projects' component={Projects} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </HamburgerMenu>
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
