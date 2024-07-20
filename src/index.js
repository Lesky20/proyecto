import React from 'react';
import ReactDOM from 'react-dom/client';
import Inicio from './Inicio';
import JuegosTitulo from './JuegosTitulo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <JuegosTitulo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

