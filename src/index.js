import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Timer2 from './timer2'
import {Route, BrowserRouter as Router} from 'react-router-dom';

const links = (
    <Router>
        <Route exact path='/' component={App}/>
        <Route exact path='/timer' component={Timer2}/>
    </Router>
)
ReactDOM.render(links, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
