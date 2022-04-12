import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootNode:any = document.getElementById('root')

ReactDOM.createRoot(rootNode).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
);