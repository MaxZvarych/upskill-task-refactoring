import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './common/containers/AppContainer/App';
import * as serviceWorker from './serviceWorker';
import './common/styles/_main.scss';

ReactDOM.render(<AppContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
