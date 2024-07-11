import React from 'react'
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

import './styles.css';




// Para haer el render inicial de la aplicacion debemos crear root
// para ello usamos ReactDOM.createRoot seguido del metodo render
// dentro del metodo render debemos utilizar el modo estricto de react React.StricMode

// ES DECIR QUE SIEMPRE TENDREMOS NUESTRO COMPONENTE INICIAL QUIEN ES EL ENCARGADO DE INICIAR
// LA APP, EN ESTE CASO EL COMPONENTE INICIAL ES App()
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App /> */}
        {/* <HelloWorldApp /> */}
        {/* <FirstApp /> */}
        <CounterApp value={0} />
    </React.StrictMode>
)