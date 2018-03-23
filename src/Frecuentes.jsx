import React from 'react';
import ReactDOM from 'react-dom';

import { Data } from '../src/Data/frecuentes.json';

const frecuentes = ({ name, rut }) =>
    Data.map((data =>
    <div className="container">
    <p>{data.name}</p>
    <p>{data.rut}</p>
    </div>
    ))
//const App = ({ message }) => <div className="message">{ message }</div>;

//ReactDOM.render(<App message="TOTAL:" />, document.getElementById('app'));
ReactDOM.render(<frecuentes/>, document.getElementById('app'));