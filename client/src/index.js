import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter as Router } from 'react-router-dom';

// use hydratation to render the app
ReactDOM.hydrateRoot(document.getElementById('root'), (
        <Router>
         <App/>
    </Router>
));




