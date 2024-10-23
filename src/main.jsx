import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/cyborg/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import './styles.css'
import App from './App.jsx'
import TareaApp from './TareaApp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    < TareaApp />
  </StrictMode>,
)
