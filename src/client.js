import App from './App';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { hydrate } from 'react-dom';

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
