import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);
