import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import { ParamsProvider } from './ParamsContext';

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider>
      <ParamsProvider>
        <App />
      </ParamsProvider>
    </ThemeProvider>
  </BrowserRouter>,
  rootElement
);
