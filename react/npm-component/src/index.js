import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Render the React application to the DOM
// Root component is to bootstrap Provider, Router and DevTools
ReactDOM.render(
  <App />,
  document.getElementById('app-container')
);
