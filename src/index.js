import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

// components
import Header from './components/header-folder/header.js'
import Navigation from './components/navigation-folder/navigation.js'

// style
import './index.css';
import './color.css';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Navigation />
  </React.StrictMode>,
  document.getElementById('app')
);

reportWebVitals();