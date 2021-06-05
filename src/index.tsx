import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './styles/global.css';
// import { reportWebVitals } from './reportWebVitals';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-198621727-1', {
  debug: process.env.NODE_ENV === 'development' ? true : false,
  titleCase: false,
  gaOptions: {
    userId: '123',
  },
}); // add your tracking id here.
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals();
