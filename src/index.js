import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

// components
import Header from './components/header-folder/header'
import Navigation from './components/navigation-folder/navigation'
import Stocks from './components/stocks-folder/stocks'

// style
import './index.css';
import './color.css';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Navigation />
    <main className='body_main'>
      <Stocks />
    </main>
  </React.StrictMode>,
  document.getElementById('app')
);

reportWebVitals();
