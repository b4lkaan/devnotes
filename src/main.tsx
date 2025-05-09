import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';     // ← make sure this matches your file name
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
