import React from 'react';
import propTypes from 'prop-types';
import { useState } from 'react';



export const CounterApp = ({ value = 1 }) => {

    const [ currentValue, setCurrentValue ] = useState( value );
    // Cuanod una funcion recibe como parametro solo un evento podemos omitir el envio del
    // evento desde el llamado a la funcion, en este caso el llamado a la funcion esta en la linea 22

    const handleAdd  = ( event ) => {
        setCurrentValue( currentValue + 1 );
        // setCurrentValue( c => c + 1);
    }

    const handleSubstract = () => {
        setCurrentValue( currentValue - 1 );
    }

    const handleReset = () => {
        setCurrentValue( value );
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ currentValue }</h2>

            <button onClick={ handleAdd }>
                +1
            </button>
            <button onClick={ handleSubstract }>
                -1
            </button>
            <button onClick={ handleReset }>Reset</button>
        </>
    )
}


CounterApp.propTypes = {
    value: propTypes.number.isRequired
}