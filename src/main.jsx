import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
//Modern Normalize
import 'modern-normalize/modern-normalize.css';
//Import SASS
import './custom.scss';
// Components
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
