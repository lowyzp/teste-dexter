import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Parse from 'parse'

Parse.initialize("OSGiFZBrXxNLjN3gYDPsgi7P4a0j6fzcc2iaCKga", null, "k8xm42UVuIP51wR2DswLY8NL3zgWfev8AuKUUjga");
Parse.serverURL = "http://localhost:1337/parse";

ReactDOM.render(<App />, document.getElementById('root'));

