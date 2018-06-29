import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import 'materialize-css/dist/css/materialize.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();