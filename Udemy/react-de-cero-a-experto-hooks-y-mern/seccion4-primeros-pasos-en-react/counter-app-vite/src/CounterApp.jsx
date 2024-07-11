import React from 'react';
import propTypes from 'prop-types';




export const CounterApp = ({ value = 'No hay value' }) => {
    // Cuanod una funcion recibe como parametro solo un evento podemos omitir el envio del 
    // evento desde el llamado a la funcion, en este caso el llamado a la funcion esta en la linea 20
    const handleAdd  = ( event ) => {
        console.log('+1');
        value = 1000;
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ value }</h2>

            <button onClick={ handleAdd }>
                +1
            </button>
        </>
    )
}


CounterApp.propTypes = {
    value: propTypes.number.isRequired
}