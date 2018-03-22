import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';
$('#signIn').click(function(){
    $(' button .navbar-toggle').addClass('collapsed');
    alert('hola')
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
