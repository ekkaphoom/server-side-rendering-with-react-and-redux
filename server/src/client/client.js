// Startup point for the client side app.
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

ReactDOM.hydrate(<Home />, document.querySelector('#root'));
