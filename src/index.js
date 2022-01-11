import React from 'react';
import ReactDOM from 'react-dom';
import CONTEXT from './context';
import './index.css';
import App from './Root';

ReactDOM.render(
  <React.StrictMode>
    <CONTEXT>
    <App />
    </CONTEXT>
  </React.StrictMode>,
  document.getElementById('root')
);

