import React from 'react'
import ReactDOM from 'react-dom/client'
import MainApp from './js/MainApp.jsx'

import "./assets/css/bootstrap.min.css";
import "./assets/css/icons.min.css";
import "./assets/css/app.min.css";

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "./css/app.css";
import { ThemeProvider } from '@mui/material';
import customTheme from './theme/customTheme.js';

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <MainApp />
    </ThemeProvider>
  </React.StrictMode>,
)
