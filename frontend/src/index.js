import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/*
* Um componete no react e uma função que retorna HTML(quando esta dentro de um aqrquivo JS ele e
* chamado de "JSX -> JavaScript XML")
*/
// Ele esta renderizando(colocando na tela)
ReactDOM.render( <React.StrictMode> <App /></React.StrictMode>,document.getElementById('root'));
