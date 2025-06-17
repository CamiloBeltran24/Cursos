import { useState } from "react"
import { useEffect } from "react";

const CounterWithEffect = () => {
    const [count, setCount] = useState(0);


    useEffect(() =>{
        console.log(`El contadotador ha cambiando a: ${count}`);
    }, [count]); // Este efecto se ejecuta cada vez que 'count' cambia.
    // El segundo argumento del useEffect es un array de dependencias. Si se pasa un array vacío, el efecto solo se ejecuta una vez al montar el componente.

    return(
        <>
            <div>
                <h2>Counter with Effect</h2>
                <p>El contador esta en: {count}</p>
                <button onClick={() => setCount( count - 1 )}>Decrementar</button>
                <button onClick={() => setCount( count + 1 )}>Incrementar</button>
            </div>
        </>
    )
}

export default CounterWithEffect;