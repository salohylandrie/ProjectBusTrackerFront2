import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';  // Si tu as un fichier CSS

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Vérifie que l'élément avec cet ID existe dans ton index.html
);



