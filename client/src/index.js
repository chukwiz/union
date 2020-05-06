import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import history from './history';
import { CookiesProvider } from 'react-cookie';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let app = (
    <CookiesProvider>
    <Router history = {history}>
        <App/>
    </Router>
    </CookiesProvider>
)

ReactDOM.render( app , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
