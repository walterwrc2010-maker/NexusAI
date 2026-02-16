import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/* ===== SCROLL RESET ===== */

// impede o navegador de restaurar a posição antiga
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

// remove qualquer #hash da URL
if (window.location.hash) {
  history.replaceState(null, '', window.location.pathname);
}

// garante que sempre comece no topo
window.scrollTo(0, 0);

/* ======================== */

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

