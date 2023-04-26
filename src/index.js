import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyles from './global';
import Calculadora from './Calculadora';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Calculadora />
  </React.StrictMode>
);