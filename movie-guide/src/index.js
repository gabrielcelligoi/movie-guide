import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// React StrictMode renders components twice on dev server
//I REMOVE THAT BECAUS IT WAS MAKING USEEFFECT RUNS TWICE.
