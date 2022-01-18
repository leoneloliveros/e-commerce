import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultPage from './pages/DefaultPage/DefaultPage';

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element= {<App />}></Route>
      <Route path="*" element= {<DefaultPage />}></Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
