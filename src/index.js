import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Header from './components/Header';
import GlobalStyle from './utils/style/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Home />
    </BrowserRouter>
  </React.StrictMode>
);

